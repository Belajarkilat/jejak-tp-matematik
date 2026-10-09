-- ---------- percubaan kedua (9 Okt 2026) ----------
-- Satu percubaan 7-9 item tidak cukup untuk membezakan murid yang menguasai
-- daripada yang belum: murid 80% gagal kira-kira 15% kali kerana nasib.
-- Jika percubaan PERTAMA gagal, percubaan KEDUA juga ditulis sekali (tidak
-- pernah ditindih) dan cadangan TP menggabungkan kedua-duanya. Percubaan
-- ketiga dan seterusnya kekal latihan, supaya ulangan tidak boleh memancing tuah.
alter table jm_cubaan add column if not exists kedua jsonb;

create or replace function jm_simpan_cubaan(
  p_bab text, p_kelas text, p_no text, p_kod text, p_aras int,
  p_kini jsonb, p_karangan jsonb default null)
returns jsonb language plpgsql security definer set search_path = public as $$
declare ada jm_cubaan%rowtype; hasil jm_cubaan%rowtype;
begin
  if not jm_pin_betul(p_kelas, p_no, p_kod) then
    return jsonb_build_object('ralat', 'pin');
  end if;
  if p_aras is null or p_aras < 1 or p_aras > 6 then raise exception 'aras tidak sah'; end if;
  if coalesce(p_bab,'') = '' or length(p_bab) > 20 then raise exception 'bab tidak sah'; end if;
  if length(coalesce(p_kini::text, '')) > 20000 then raise exception 'rekod terlalu besar'; end if;
  if p_karangan is not null and length(p_karangan::text) > 9000 then raise exception 'karangan terlalu panjang'; end if;

  select * into ada from jm_cubaan
    where bab = p_bab and kelas = p_kelas and no = p_no and aras = p_aras for update;

  if ada.kelas is null then
    insert into jm_cubaan(bab, kelas, no, aras, pertama, terbaik, kali, karangan, akhir)
      values (p_bab, p_kelas, p_no, p_aras, p_kini, p_kini, 1, p_karangan,
              (p_kini->>'masa')::bigint)
      returning * into hasil;
  else
    update jm_cubaan set
      pertama  = coalesce(ada.pertama, p_kini),
      kedua    = case
                   when ada.kedua is not null then ada.kedua
                   when ada.pertama is not null
                        and not coalesce((ada.pertama->>'lulus')::boolean, false) then p_kini
                   else null
                 end,
      terbaik  = case
                   when ada.terbaik is null then p_kini
                   when (p_kini->>'betul')::int > (ada.terbaik->>'betul')::int then p_kini
                   when (p_kini->>'lulus')::boolean and not (ada.terbaik->>'lulus')::boolean then p_kini
                   else ada.terbaik
                 end,
      kali     = ada.kali + 1,
      karangan = coalesce(p_karangan, ada.karangan),
      akhir    = (p_kini->>'masa')::bigint
      where bab = p_bab and kelas = p_kelas and no = p_no and aras = p_aras
      returning * into hasil;
  end if;

  return to_jsonb(hasil);
end $$;

-- Papan murid: percubaan kedua dipulangkan untuk murid itu sendiri sahaja,
-- sama seperti percubaan pertama.
create or replace function jm_papan(p_bab text, p_kelas text, p_no text, p_pin text)
returns jsonb language plpgsql security definer set search_path = public as $$
begin
  if not jm_pin_betul(p_kelas, p_no, p_pin) then return null; end if;
  return jsonb_build_object(
    'cubaan', coalesce((select jsonb_agg(jsonb_build_object(
        'bab', bab, 'kelas', kelas, 'no', no, 'aras', aras,
        'pertama', case when no = p_no then pertama else null end,
        'kedua', case when no = p_no then kedua else null end,
        'terbaik', terbaik, 'kali', kali, 'akhir', akhir,
        'karangan', case when no = p_no then karangan else null end))
      from jm_cubaan where bab = p_bab and kelas = p_kelas), '[]'::jsonb),
    'tp', (select to_jsonb(t) from jm_tp t where bab = p_bab and kelas = p_kelas and no = p_no)
  );
end $$;
