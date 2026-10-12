-- 13 Okt 2026: bayaran paket kelas (RM23 = 5 kelas tambahan), melalui aliran toyyibPay sedia ada.
-- peringkat 'kelas' dalam jm_bayaran; jm_bayaran_berjaya tambah jm_guru.paket_kelas (bukan premium).
alter table jm_bayaran drop constraint if exists jm_bayaran_peringkat_check;
alter table jm_bayaran add constraint jm_bayaran_peringkat_check check (peringkat in ('rendah', 'atas', 'kelas'));

create or replace function jm_harga(p_guru uuid, p_peringkat text)
returns int language sql stable security definer set search_path = public as $$
  select case
    when p_peringkat = 'kelas' then 2300
    when now() < timestamptz '2027-01-01 00:00:00+08' then 2300
    when exists (select 1 from jm_bayaran b where b.guru = p_guru and b.peringkat = p_peringkat
                 and b.status = 'berjaya' and b.dibayar < timestamptz '2027-01-01 00:00:00+08')
     and coalesce((select case when p_peringkat = 'rendah' then premium_rendah_tamat else premium_atas_tamat end
                    from jm_guru where id = p_guru), '-infinity') > now() - interval '30 days'
      then 2300
    else 5900 end
$$;

create or replace function jm_bayaran_berjaya(p_billcode text, p_refno text, p_saluran text, p_jumlah_sen int)
returns jsonb language plpgsql security definer set search_path = public as $$
declare b jm_bayaran%rowtype; tamat timestamptz; paket int;
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

-- 13 Okt 2026: Pakej Panitia Sekolah.
-- Ketua bayar satu pakej (kecil/standard/besar) bagi satu peringkat; guru lain sertai dengan kod
-- dan mendapat Premium peringkat itu hingga tarikh tamat panitia. Kelas dikongsi dalam satu kolam.
create table if not exists jm_panitia (
  id       uuid primary key default gen_random_uuid(),
  ketua    uuid not null references auth.users(id) on delete restrict,
  sekolah  text not null default '',
  pakej    text not null check (pakej in ('kecil','standard','besar')),
  peringkat text not null check (peringkat in ('rendah','atas')),
  kod      text not null unique default upper(substr(md5(random()::text || clock_timestamp()::text), 1, 8)),
  tamat    timestamptz not null,
  dicipta  timestamptz not null default now(),
  unique (ketua, peringkat)
);
alter table jm_panitia enable row level security;
revoke all on jm_panitia from anon, authenticated;

alter table jm_guru add column if not exists panitia_rendah uuid references jm_panitia(id) on delete set null;
alter table jm_guru add column if not exists panitia_atas   uuid references jm_panitia(id) on delete set null;

alter table jm_bayaran add column if not exists pakej text check (pakej in ('kecil','standard','besar'));
alter table jm_bayaran drop constraint if exists jm_bayaran_peringkat_check;
alter table jm_bayaran add constraint jm_bayaran_peringkat_check
  check (peringkat in ('rendah','atas','kelas','panitia-rendah','panitia-atas'));

-- had guru dan kelas bagi setiap pakej
create or replace function jm_pakej_had(p_pakej text, out guru int, out kelas int)
language sql immutable as $$
  select case p_pakej when 'kecil' then 5 when 'standard' then 10 else 20 end,
         case p_pakej when 'kecil' then 25 when 'standard' then 50 else 100 end
$$;


-- (bahagian 2) fungsi panitia. Dijalankan selepas migrasi-panitia.sql.

-- sen. Perintis hingga 31 Dis 2026; peringkat kedua oleh ketua yang sama -30%.
create or replace function jm_harga_panitia(p_guru uuid, p_pakej text, p_peringkat text)
returns int language sql stable security definer set search_path = public as $$
  select round((case when now() < timestamptz '2027-01-01 00:00:00+08'
               then case p_pakej when 'kecil' then 9500 when 'standard' then 16700 else 29300 end
               else case p_pakej when 'kecil' then 24800 when 'standard' then 44600 else 77900 end end)
         * case when exists (select 1 from jm_panitia where ketua = p_guru and peringkat <> p_peringkat and tamat > now())
                then 0.7 else 1 end)::int
$$;

-- selaraskan Premium semua ahli dengan tarikh tamat panitia (tidak pernah memendekkan)
create or replace function jm_panitia_selaras(p_id uuid)
returns void language plpgsql security definer set search_path = public as $$
declare p jm_panitia%rowtype;
begin
  select * into p from jm_panitia where id = p_id;
  if p.id is null then return; end if;
  if p.peringkat = 'rendah' then
    update jm_guru set premium_rendah_tamat = greatest(coalesce(premium_rendah_tamat, '-infinity'), p.tamat)
      where panitia_rendah = p.id;
  else
    update jm_guru set premium_atas_tamat = greatest(coalesce(premium_atas_tamat, '-infinity'), p.tamat)
      where panitia_atas = p.id;
  end if;
end $$;

-- guru sertai panitia dengan kod
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
  select count(*) into ahli from jm_guru
    where (p.peringkat = 'rendah' and panitia_rendah = p.id) or (p.peringkat = 'atas' and panitia_atas = p.id);
  if ahli >= had and not exists (select 1 from jm_guru where id = uid
      and ((p.peringkat = 'rendah' and panitia_rendah = p.id) or (p.peringkat = 'atas' and panitia_atas = p.id))) then
    return jsonb_build_object('ok', false, 'sebab', 'Panitia ini sudah penuh (' || had || ' guru)');
  end if;
  if p.peringkat = 'rendah' then update jm_guru set panitia_rendah = p.id where id = uid;
  else update jm_guru set panitia_atas = p.id where id = uid; end if;
  perform jm_panitia_selaras(p.id);
  return jsonb_build_object('ok', true, 'sekolah', p.sekolah, 'peringkat', p.peringkat, 'pakej', p.pakej, 'tamat', p.tamat);
end $$;

-- panitia milik ketua + bilangan ahli dan kelas
create or replace function jm_panitia_saya()
returns jsonb language sql stable security definer set search_path = public as $$
  select coalesce(jsonb_agg(jsonb_build_object(
    'id', p.id, 'sekolah', p.sekolah, 'pakej', p.pakej, 'peringkat', p.peringkat, 'kod', p.kod, 'tamat', p.tamat,
    'had_guru', (jm_pakej_had(p.pakej)).guru, 'had_kelas', (jm_pakej_had(p.pakej)).kelas,
    'ahli', (select count(*) from jm_guru g where (p.peringkat = 'rendah' and g.panitia_rendah = p.id) or (p.peringkat = 'atas' and g.panitia_atas = p.id)),
    'kelas', (select count(*) from jm_kelas k join jm_guru g on g.id = k.guru
              where (p.peringkat = 'rendah' and g.panitia_rendah = p.id) or (p.peringkat = 'atas' and g.panitia_atas = p.id))
  ) order by p.dicipta), '[]'::jsonb)
  from jm_panitia p where p.ketua = auth.uid()
$$;

-- had kelas: had individu ATAU kolam panitia aktif (jumlah kelas semua ahli)
create or replace function jm_had_kelas()
returns trigger language plpgsql security definer set search_path = public as $$
declare g jm_guru%rowtype; sendiri int; pid uuid; p jm_panitia%rowtype; guna int;
begin
  if new.guru in ('88ee69f1-a6f8-4e53-9f40-be3c5ddfc383','14b0c5cf-0400-45ac-b3f3-26eb6a337f30') then
    return new;
  end if;
  select * into g from jm_guru where id = new.guru;
  select count(*) into sendiri from jm_kelas where guru = new.guru;
  if sendiri < 5 * (1 + coalesce(g.paket_kelas, 0)) then return new; end if;
  foreach pid in array array[g.panitia_rendah, g.panitia_atas] loop
    continue when pid is null;
    select * into p from jm_panitia where id = pid and tamat > now();
    continue when p.id is null;
    select count(*) into guna from jm_kelas k join jm_guru x on x.id = k.guru
      where (p.peringkat = 'rendah' and x.panitia_rendah = p.id) or (p.peringkat = 'atas' and x.panitia_atas = p.id);
    if guna < (jm_pakej_had(p.pakej)).kelas then return new; end if;
  end loop;
  raise exception 'had kelas bagi setiap guru';
end $$;

-- bayaran berjaya: tambah cabang panitia
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
  if b.peringkat in ('panitia-rendah', 'panitia-atas') then
    per := substr(b.peringkat, 9);
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
    if per = 'rendah' then update jm_guru set panitia_rendah = pan.id where id = b.guru;
    else update jm_guru set panitia_atas = pan.id where id = b.guru; end if;
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

revoke all on function jm_harga_panitia(uuid, text, text), jm_panitia_selaras(uuid) from public, anon, authenticated;
grant execute on function jm_harga_panitia(uuid, text, text) to service_role;
revoke all on function jm_panitia_sertai(text), jm_panitia_saya() from public, anon;
grant execute on function jm_panitia_sertai(text), jm_panitia_saya() to authenticated;
revoke all on function jm_bayaran_berjaya(text, text, text, int) from public, anon, authenticated;
grant execute on function jm_bayaran_berjaya(text, text, text, int) to service_role;

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
      where (pan.peringkat = 'rendah' and x.panitia_rendah = pan.id) or (pan.peringkat = 'atas' and x.panitia_atas = pan.id);
    if guna < (jm_pakej_had(pan.pakej)).kelas then return new; end if;
  end loop;
  raise exception 'had kelas bagi setiap guru';
end $$;
