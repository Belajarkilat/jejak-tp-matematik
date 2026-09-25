-- ============================================================
-- Jejak TP Matematik — skema rekod PBD.
-- Diadaptasi daripada skema Jejak TP Sains (cikgunani/skema.sql, versi 3),
-- projek Supabase BERASINGAN (bukan dikongsi dengan Jejak TP Sains).
--
-- Prinsip (sama seperti Jejak TP Sains):
-- * Guru log masuk dengan Supabase Auth (e-mel atau Google). Setiap guru
--   hanya nampak kelas miliknya, ditegakkan oleh RLS pada auth.uid().
-- * Murid tiada akaun. Murid masuk dengan KOD KELAS (6 aksara rawak),
--   memilih namanya, dan memasukkan PIN 4 angka. Semua bacaan dan tulisan
--   murid melalui fungsi SECURITY DEFINER yang menyemak kod atau PIN dahulu.
-- * Kunci anon tidak boleh membaca atau menulis mana-mana jadual terus.
-- * Percubaan PERTAMA setiap murid bagi setiap hentian ditulis sekali
--   sahaja dan tidak pernah ditindih. Itulah bukti PBD.
--
-- Kod bab berbentuk m{tingkatan}b{bab}, cth. m3b3 = Matematik Ting. 3 Bab 3.
-- Meliputi Tingkatan 1 hingga 5 (menengah rendah T1-3, menengah atas T4-5).
-- Premium dijual berasingan ikut peringkat, RM23/tahun setiap satu — model
-- harga yang sama seperti Jejak TP Sains.
-- ============================================================

create extension if not exists pgcrypto with schema extensions;

-- ---------- utiliti ----------

create or replace function jm_cap(p_teks text)
returns text language sql immutable set search_path = public, extensions as $$
  select encode(extensions.digest(p_teks, 'sha256'), 'hex')
$$;

-- Kod kelas: 6 aksara tanpa huruf yang mudah keliru (I, L, O, 0, 1).
-- 31^6 ialah kira-kira 887 juta kemungkinan.
create or replace function jm_jana_kod()
returns text language plpgsql volatile security definer
set search_path = public, extensions as $$
declare abjad text := 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; k text; b bytea; i int;
begin
  loop
    b := extensions.gen_random_bytes(6); k := '';
    for i in 0..5 loop
      k := k || substr(abjad, 1 + (get_byte(b, i) % length(abjad)), 1);
    end loop;
    exit when not exists (select 1 from jm_kelas where kod = k);
  end loop;
  return k;
end $$;

-- ---------- jadual ----------

create table jm_guru (
  id       uuid primary key references auth.users(id) on delete cascade,
  nama     text not null default '' check (length(nama) <= 80),
  sekolah  text not null default '' check (length(sekolah) <= 120),
  dicipta  timestamptz not null default now(),
  telefon  text not null default '' check (telefon = '' or telefon ~ '^[0-9]{9,15}$'),
  setuju_pemasaran boolean not null default false,
  setuju_masa      timestamptz,
  -- Menengah rendah (T1-3) dan menengah atas (T4-5) dijual berasingan,
  -- RM23 setiap satu setahun. null = tiada langganan aktif.
  premium_rendah_tamat timestamptz,
  premium_atas_tamat   timestamptz
);

create table jm_kelas (
  id       text primary key default ('k' || encode(extensions.gen_random_bytes(6), 'hex')),
  guru     uuid not null default auth.uid() references auth.users(id) on delete cascade,
  nama     text not null check (length(nama) between 1 and 60),
  kod      text not null unique default jm_jana_kod(),
  dicipta  timestamptz not null default now()
);
create index jm_kelas_guru on jm_kelas(guru);

-- Nama penuh dan PIN murid. Hanya guru pemilik kelas boleh membacanya
-- terus. Murid yang tahu kod kelas mendapat senarai NAMA sahaja melalui
-- jm_kelas_buka, tidak pernah PIN.
create table jm_murid (
  kelas    text not null references jm_kelas(id) on delete cascade,
  no       text not null check (no ~ '^[0-9]{1,3}$'),
  nama     text not null check (length(nama) between 1 and 120),
  pin      text not null check (pin ~ '^[0-9]{4}$'),
  primary key (kelas, no)
);

-- Satu baris = satu murid, satu hentian, satu bab.
create table jm_cubaan (
  bab       text not null,
  kelas     text not null references jm_kelas(id) on delete cascade,
  no        text not null,
  aras      int  not null check (aras between 1 and 6),
  pertama   jsonb,
  terbaik   jsonb,
  kali      int not null default 0,
  karangan  jsonb,
  akhir     bigint,
  primary key (bab, kelas, no, aras)
);

create table jm_tp (
  bab     text not null,
  kelas   text not null references jm_kelas(id) on delete cascade,
  no      text not null,
  tp      int check (tp between 0 and 6),
  sebab   text not null default '' check (length(sebab) <= 2000),
  masa    timestamptz not null default now(),
  primary key (bab, kelas, no)
);

-- Kiraan PIN salah, supaya tekaan 10 000 PIN tidak boleh dicuba berterusan.
create table jm_gagal (
  kelas  text not null,
  no     text not null,
  bil    int not null default 0,
  mula   timestamptz not null default now(),
  primary key (kelas, no)
);

-- Had supaya satu akaun tidak boleh memenuhkan pangkalan data.
create or replace function jm_had_kelas()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from jm_kelas where guru = new.guru) >= 20 then
    raise exception 'had 20 kelas bagi setiap guru';
  end if;
  return new;
end $$;
create trigger jm_had_kelas before insert on jm_kelas
  for each row execute function jm_had_kelas();

-- ---------- peraturan baris ----------

alter table jm_guru   enable row level security;
alter table jm_kelas  enable row level security;
alter table jm_murid  enable row level security;
alter table jm_cubaan enable row level security;
alter table jm_tp     enable row level security;
alter table jm_gagal  enable row level security;

create or replace function jm_milik(p_kelas text)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from jm_kelas where id = p_kelas and guru = auth.uid())
$$;

create policy jm_guru_diri on jm_guru for all to authenticated
  using (id = auth.uid()) with check (id = auth.uid());

create policy jm_kelas_milik on jm_kelas for all to authenticated
  using (guru = auth.uid()) with check (guru = auth.uid());

create policy jm_murid_milik on jm_murid for all to authenticated
  using (jm_milik(kelas)) with check (jm_milik(kelas));

create policy jm_cubaan_milik on jm_cubaan for select to authenticated
  using (jm_milik(kelas));

create policy jm_tp_milik on jm_tp for all to authenticated
  using (jm_milik(kelas)) with check (jm_milik(kelas));

-- jm_gagal: tiada dasar langsung. Hanya fungsi yang menyentuhnya.

-- ---------- murid ----------

create or replace function jm_pin_betul(p_kelas text, p_no text, p_pin text)
returns boolean language plpgsql security definer set search_path = public as $$
declare simpan text; g jm_gagal%rowtype;
begin
  select * into g from jm_gagal where kelas = p_kelas and no = p_no;
  if g.kelas is not null and g.bil >= 8 and g.mula > now() - interval '15 minutes' then
    perform pg_sleep(0.5);
    return false;
  end if;
  select pin into simpan from jm_murid where kelas = p_kelas and no = p_no;
  if simpan is not null and simpan = coalesce(p_pin, '') then
    if g.kelas is not null then delete from jm_gagal where kelas = p_kelas and no = p_no; end if;
    return true;
  end if;
  insert into jm_gagal(kelas, no, bil, mula) values (p_kelas, p_no, 1, now())
    on conflict (kelas, no) do update set
      bil  = case when jm_gagal.mula < now() - interval '15 minutes' then 1 else jm_gagal.bil + 1 end,
      mula = case when jm_gagal.mula < now() - interval '15 minutes' then now() else jm_gagal.mula end;
  perform pg_sleep(0.3);
  return false;
end $$;

-- Buka kelas dengan kod. Memulangkan nama kelas, nama guru, status premium
-- (dua peringkat berasingan) dan senarai nama murid (tanpa PIN).
create or replace function jm_kelas_buka(p_kod text)
returns jsonb language plpgsql security definer set search_path = public as $$
declare k jm_kelas%rowtype; bersih text;
begin
  bersih := upper(regexp_replace(coalesce(p_kod, ''), '[^A-Za-z0-9]', '', 'g'));
  select * into k from jm_kelas where kod = bersih;
  if k.id is null then
    perform pg_sleep(0.5);
    return null;
  end if;
  return jsonb_build_object(
    'id', k.id, 'nama', k.nama, 'kod', k.kod,
    'guru', coalesce((select nama from jm_guru where id = k.guru), ''),
    'sekolah', coalesce((select sekolah from jm_guru where id = k.guru), ''),
    'premium_rendah', coalesce((select premium_rendah_tamat > now() from jm_guru where id = k.guru), false),
    'premium_atas', coalesce((select premium_atas_tamat > now() from jm_guru where id = k.guru), false),
    'murid', coalesce((select jsonb_agg(jsonb_build_object('no', no, 'nama', nama)
                        order by lpad(no, 3, '0')) from jm_murid where kelas = k.id), '[]'::jsonb)
  );
end $$;

create or replace function jm_masuk(p_kelas text, p_no text, p_pin text)
returns boolean language sql security definer set search_path = public as $$
  select jm_pin_betul(p_kelas, p_no, p_pin)
$$;

-- Rekod kelas untuk papan skor murid. Karangan murid lain tidak dipulangkan.
create or replace function jm_papan(p_bab text, p_kelas text, p_no text, p_pin text)
returns jsonb language plpgsql security definer set search_path = public as $$
begin
  if not jm_pin_betul(p_kelas, p_no, p_pin) then return null; end if;
  return jsonb_build_object(
    'cubaan', coalesce((select jsonb_agg(jsonb_build_object(
        'bab', bab, 'kelas', kelas, 'no', no, 'aras', aras,
        'pertama', case when no = p_no then pertama else null end,
        'terbaik', terbaik, 'kali', kali, 'akhir', akhir,
        'karangan', case when no = p_no then karangan else null end))
      from jm_cubaan where bab = p_bab and kelas = p_kelas), '[]'::jsonb),
    'tp', (select to_jsonb(t) from jm_tp t where bab = p_bab and kelas = p_kelas and no = p_no)
  );
end $$;

-- Simpan satu percubaan. Percubaan pertama tidak pernah ditindih.
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

-- ---------- guru ----------

create or replace function jm_guru_simpan_murid(p_kelas text, p_murid jsonb)
returns boolean language plpgsql security definer set search_path = public as $$
begin
  if not jm_milik(p_kelas) then raise exception 'bukan kelas anda'; end if;
  if jsonb_array_length(coalesce(p_murid, '[]'::jsonb)) > 60 then
    raise exception 'had 60 murid bagi setiap kelas';
  end if;
  delete from jm_murid where kelas = p_kelas;
  insert into jm_murid(kelas, no, nama, pin)
    select p_kelas, x->>'no', x->>'nama', x->>'pin'
    from jsonb_array_elements(coalesce(p_murid, '[]'::jsonb)) x;
  delete from jm_gagal where kelas = p_kelas;
  return true;
end $$;

-- ---------- kebenaran ----------

revoke all on jm_guru, jm_kelas, jm_murid, jm_cubaan, jm_tp, jm_gagal from anon, authenticated;
grant select, insert, update on jm_guru to authenticated;
grant select, insert (nama), update (nama), delete on jm_kelas to authenticated;
grant select, insert, update, delete on jm_murid to authenticated;
grant select on jm_cubaan to authenticated;
grant select, insert, update, delete on jm_tp to authenticated;

revoke all on function jm_cap(text) from public, anon, authenticated;
revoke all on function jm_jana_kod() from public, anon;
grant execute on function jm_jana_kod() to authenticated;
revoke all on function jm_pin_betul(text, text, text) from public, anon, authenticated;
revoke all on function jm_had_kelas() from public, anon, authenticated;
revoke all on function jm_milik(text) from public, anon;
grant execute on function jm_milik(text) to authenticated;

grant execute on function jm_kelas_buka(text) to anon, authenticated;
grant execute on function jm_masuk(text, text, text) to anon, authenticated;
grant execute on function jm_papan(text, text, text, text) to anon, authenticated;
grant execute on function jm_simpan_cubaan(text, text, text, text, int, jsonb, jsonb) to anon, authenticated;
revoke all on function jm_guru_simpan_murid(text, jsonb) from public, anon;
grant execute on function jm_guru_simpan_murid(text, jsonb) to authenticated;

-- ---------- semakan soalan oleh guru (Mod Semak) ----------
-- Satu baris bagi setiap guru bagi setiap item. `item` ialah bab:hentian:indeks
-- (atau bos, kad, boskad). Kod bab m{tingkatan 1-5}b{bab}.
create table jm_semakan (
  guru    uuid not null default auth.uid() references auth.users(id) on delete cascade,
  item    text not null check (item ~ '^m[1-5]b[0-9]{1,2}:[1-6]:([0-9]{1,2}|bos|kad|boskad)$'),
  status  text not null check (status in ('ok','masalah')),
  komen   text not null default '' check (length(komen) <= 1500),
  teks    text not null default '' check (length(teks) <= 3000),
  dikemas timestamptz not null default now(),
  primary key (guru, item)
);
alter table jm_semakan enable row level security;
create policy jm_semakan_diri on jm_semakan for all to authenticated
  using (guru = auth.uid()) with check (guru = auth.uid());
grant select, insert, update, delete on jm_semakan to authenticated;
revoke all on jm_semakan from anon;

-- Maklum balas umum cikgu. Cikgu hanya boleh tambah dan baca rekod sendiri.
create table jm_maklum_balas (
  id        bigserial primary key,
  guru      uuid not null default auth.uid() references auth.users(id) on delete cascade,
  skor      int  not null check (skor between 1 and 5),
  suka      text not null default '' check (length(suka) <= 1500),
  baiki     text not null default '' check (length(baiki) <= 1500),
  tingkatan text[] not null default '{}',
  hubungi   boolean not null default false,
  dicipta   timestamptz not null default now()
);
alter table jm_maklum_balas enable row level security;
create policy jm_maklum_balas_tambah on jm_maklum_balas for insert to authenticated with check (guru = auth.uid());
create policy jm_maklum_balas_baca on jm_maklum_balas for select to authenticated using (guru = auth.uid());
grant select, insert on jm_maklum_balas to authenticated;
grant usage on sequence jm_maklum_balas_id_seq to authenticated;
revoke all on jm_maklum_balas from anon;

-- ---------- ping tanpa nama ----------
-- Pautan main bebas tidak menyimpan apa-apa rekod murid. Jadual ini
-- menyimpan kiraan sahaja: tiada nama, tiada sekolah, tiada jawapan.
-- `peranti` ialah 8 aksara rawak dijana dalam pelayar untuk membezakan
-- satu telefon daripada telefon lain; tidak boleh dikaitkan dengan sesiapa.
create table jm_ping (
  id      bigserial primary key,
  jenis   text not null check (jenis in ('buka','hentian','ralat')),
  bab     text check (bab ~ '^m[1-5]b[0-9]{1,2}$'),
  aras    int check (aras between 1 and 6),
  peranti text not null check (peranti ~ '^[a-z0-9]{8}$'),
  nota    text not null default '' check (length(nota) <= 300),
  masa    timestamptz not null default now()
);
create index jm_ping_masa on jm_ping (masa desc);
alter table jm_ping enable row level security;
revoke all on jm_ping from anon, authenticated;

-- Had 300 ping sehari bagi setiap peranti supaya kunci awam tidak boleh
-- digunakan untuk membanjiri jadual.
create or replace function jm_ping(
  p_jenis text, p_peranti text, p_bab text default null,
  p_aras int default null, p_nota text default ''
) returns void language plpgsql security definer set search_path = public as $$
begin
  if p_jenis not in ('buka','hentian','ralat') then return; end if;
  if p_peranti !~ '^[a-z0-9]{8}$' then return; end if;
  if p_bab is not null and p_bab !~ '^m[1-5]b[0-9]{1,2}$' then return; end if;
  if (select count(*) from jm_ping
      where peranti = p_peranti and masa > now() - interval '1 day') >= 300 then
    return;
  end if;
  insert into jm_ping (jenis, bab, aras, peranti, nota)
  values (p_jenis, p_bab,
          case when p_aras between 1 and 6 then p_aras end,
          p_peranti, left(coalesce(p_nota,''), 300));
end $$;
revoke all on function jm_ping(text, text, text, int, text) from public;
grant execute on function jm_ping(text, text, text, int, text) to anon, authenticated;
