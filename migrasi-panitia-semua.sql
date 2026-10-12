-- 13 Okt 2026: Pakej Panitia meliputi SEMUA Tingkatan 1-5 (menggantikan satu peringkat setiap pakej).
-- Satu bil -> satu baris jm_panitia (peringkat 'semua') -> Premium rendah DAN atas untuk semua ahli.
-- Ahli sertai dengan satu kod; jm_guru.panitia_rendah dan panitia_atas kedua-duanya menunjuk panitia yang sama.
alter table jm_panitia drop constraint if exists jm_panitia_peringkat_check;
alter table jm_panitia add constraint jm_panitia_peringkat_check check (peringkat in ('rendah','atas','semua'));
alter table jm_bayaran drop constraint if exists jm_bayaran_peringkat_check;
alter table jm_bayaran add constraint jm_bayaran_peringkat_check
  check (peringkat in ('rendah','atas','kelas','panitia','panitia-rendah','panitia-atas'));

-- harga (sen): perintis hingga 31 Dis 2026, kemudian harga biasa. Tiada diskaun peringkat kedua lagi.
create or replace function jm_harga_panitia(p_guru uuid, p_pakej text, p_peringkat text)
returns int language sql stable security definer set search_path = public as $$
  select case when now() < timestamptz '2027-01-01 00:00:00+08'
              then case p_pakej when 'kecil' then 9500 when 'standard' then 16700 else 29300 end
              else case p_pakej when 'kecil' then 24800 when 'standard' then 44600 else 77900 end end
$$;

create or replace function jm_panitia_selaras(p_id uuid)
returns void language plpgsql security definer set search_path = public as $$
declare p jm_panitia%rowtype;
begin
  select * into p from jm_panitia where id = p_id;
  if p.id is null then return; end if;
  if p.peringkat in ('rendah', 'semua') then
    update jm_guru set premium_rendah_tamat = greatest(coalesce(premium_rendah_tamat, '-infinity'), p.tamat)
      where panitia_rendah = p.id;
  end if;
  if p.peringkat in ('atas', 'semua') then
    update jm_guru set premium_atas_tamat = greatest(coalesce(premium_atas_tamat, '-infinity'), p.tamat)
      where panitia_atas = p.id;
  end if;
end $$;

create or replace function jm_panitia_sertai(p_kod text)
returns jsonb language plpgsql security definer set search_path = public as $$
declare p jm_panitia%rowtype; had int; ahli int; uid uuid := auth.uid();
begin
  if uid is null then return jsonb_build_object('ok', false, 'sebab', 'Sila log masuk'); end if;
  if not exists (select 1 from jm_guru where id = uid) then
    return jsonb_build_object('ok', false, 'sebab', 'Lengkapkan profil guru dahulu');
  end if;
  select * into p from jm_panitia where kod = upper(btrim(p_kod)) and tamat > now();
  if p.id is null then return jsonb_build_object('ok', false, 'sebab', 'Kod panitia tidak dijumpai atau sudah tamat'); end if;
  select (jm_pakej_had(p.pakej)).guru into had;
  select count(*) into ahli from jm_guru where panitia_rendah = p.id or panitia_atas = p.id;
  if ahli >= had and not exists (select 1 from jm_guru where id = uid and (panitia_rendah = p.id or panitia_atas = p.id)) then
    return jsonb_build_object('ok', false, 'sebab', 'Panitia ini sudah penuh (' || had || ' guru)');
  end if;
  if p.peringkat in ('rendah', 'semua') then update jm_guru set panitia_rendah = p.id where id = uid; end if;
  if p.peringkat in ('atas', 'semua') then update jm_guru set panitia_atas = p.id where id = uid; end if;
  perform jm_panitia_selaras(p.id);
  return jsonb_build_object('ok', true, 'sekolah', p.sekolah, 'peringkat', p.peringkat, 'pakej', p.pakej, 'tamat', p.tamat);
end $$;

create or replace function jm_panitia_saya()
returns jsonb language sql stable security definer set search_path = public as $$
  select coalesce(jsonb_agg(jsonb_build_object(
    'id', p.id, 'sekolah', p.sekolah, 'pakej', p.pakej, 'peringkat', p.peringkat, 'kod', p.kod, 'tamat', p.tamat,
    'had_guru', (jm_pakej_had(p.pakej)).guru, 'had_kelas', (jm_pakej_had(p.pakej)).kelas,
    'ahli', (select count(*) from jm_guru g where g.panitia_rendah = p.id or g.panitia_atas = p.id),
    'kelas', (select count(*) from jm_kelas k join jm_guru g on g.id = k.guru where g.panitia_rendah = p.id or g.panitia_atas = p.id)
  ) order by p.dicipta), '[]'::jsonb)
  from jm_panitia p where p.ketua = auth.uid()
$$;

-- had kelas: had individu ATAU kolam panitia aktif (jumlah kelas semua ahli)
create or replace function jm_had_kelas()
returns trigger language plpgsql security definer set search_path = public as $$
declare g jm_guru%rowtype; sendiri int; had int; pid uuid; pan jm_panitia%rowtype; guna int;
begin
  
  select * into g from jm_guru where id = new.guru;
  select count(*) into sendiri from jm_kelas where guru = new.guru;
  had := (case when jm_premium(new.guru) then 5 else 2 end) + 5 * coalesce(g.paket_kelas, 0);
  if sendiri < had then return new; end if;
  foreach pid in array array[g.panitia_rendah, g.panitia_atas] loop
    continue when pid is null;
    select * into pan from jm_panitia where id = pid and tamat > now();
    continue when pan.id is null;
    select count(*) into guna from jm_kelas k join jm_guru x on x.id = k.guru
      where x.panitia_rendah = pan.id or x.panitia_atas = pan.id;
    if guna < (jm_pakej_had(pan.pakej)).kelas then return new; end if;
  end loop;
  raise exception 'had kelas bagi setiap guru';
end $$;

-- bayaran berjaya: cabang panitia (peringkat 'panitia' = semua; 'panitia-rendah/atas' warisan)
create or replace function jm_bayaran_berjaya(p_billcode text, p_refno text, p_saluran text, p_jumlah_sen int)
returns jsonb language plpgsql security definer set search_path = public as $$
declare b jm_bayaran%rowtype; tamat timestamptz; paket int; per text; pan jm_panitia%rowtype; sk text;
begin
  select * into b from jm_bayaran where billcode = p_billcode for update;
  if b.id is null then return jsonb_build_object('ok', false, 'sebab', 'bil tiada'); end if;
  if b.status = 'berjaya' then return jsonb_build_object('ok', true, 'ulang', true, 'tamat', b.premium_tamat_baru); end if;
  if p_jumlah_sen < b.jumlah_sen then return jsonb_build_object('ok', false, 'sebab', 'jumlah kurang'); end if;
  if b.peringkat = 'kelas' then
    update jm_guru set paket_kelas = paket_kelas + 1 where id = b.guru returning paket_kelas into paket;
    if paket is null then return jsonb_build_object('ok', false, 'sebab', 'guru tiada'); end if;
    update jm_bayaran set status = 'berjaya', refno = p_refno, saluran = p_saluran, dibayar = now() where id = b.id;
    return jsonb_build_object('ok', true, 'paket', paket);
  end if;
  if b.peringkat like 'panitia%' then
    per := case when b.peringkat = 'panitia-rendah' then 'rendah' when b.peringkat = 'panitia-atas' then 'atas' else 'semua' end;
    select sekolah into sk from jm_guru where id = b.guru;
    if sk is null then return jsonb_build_object('ok', false, 'sebab', 'guru tiada'); end if;
    select * into pan from jm_panitia where ketua = b.guru and peringkat = per for update;
    if pan.id is null then
      insert into jm_panitia (ketua, sekolah, pakej, peringkat, tamat)
        values (b.guru, sk, b.pakej, per, now() + interval '365 days') returning * into pan;
    else
      update jm_panitia set pakej = b.pakej,
             tamat = greatest(tamat, now()) + interval '365 days' where id = pan.id returning * into pan;
    end if;
    if per in ('rendah', 'semua') then update jm_guru set panitia_rendah = pan.id where id = b.guru; end if;
    if per in ('atas', 'semua') then update jm_guru set panitia_atas = pan.id where id = b.guru; end if;
    perform jm_panitia_selaras(pan.id);
    update jm_bayaran set status = 'berjaya', refno = p_refno, saluran = p_saluran,
           dibayar = now(), premium_tamat_baru = pan.tamat where id = b.id;
    return jsonb_build_object('ok', true, 'tamat', pan.tamat, 'kod', pan.kod);
  end if;
  if b.peringkat = 'rendah' then
    update jm_guru set premium_rendah_tamat = greatest(coalesce(premium_rendah_tamat, now()), now()) + interval '365 days'
      where id = b.guru returning premium_rendah_tamat into tamat;
  else
    update jm_guru set premium_atas_tamat = greatest(coalesce(premium_atas_tamat, now()), now()) + interval '365 days'
      where id = b.guru returning premium_atas_tamat into tamat;
  end if;
  if tamat is null then return jsonb_build_object('ok', false, 'sebab', 'guru tiada'); end if;
  update jm_bayaran set status = 'berjaya', refno = p_refno, saluran = p_saluran,
         dibayar = now(), premium_tamat_baru = tamat where id = b.id;
  return jsonb_build_object('ok', true, 'tamat', tamat);
end $$;
