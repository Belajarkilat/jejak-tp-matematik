-- 13 Okt 2026: had 5 kelas setiap guru (+5 bagi setiap paket_kelas), had 60 murid pada insert terus.
-- Dijalankan pada projek noaeagitwklnpmyhhhtn; versi js_ untuk Sejarah serupa. Tambah paket buat masa ini manual:
--   update jm_guru set paket_kelas = paket_kelas + 1 where id = '<uuid guru>';
alter table jm_guru add column if not exists paket_kelas int not null default 0 check (paket_kelas >= 0);
create or replace function jm_had_kelas()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from jm_kelas where guru = new.guru)
     >= 5 * (1 + coalesce((select paket_kelas from jm_guru where id = new.guru), 0)) then
    raise exception 'had kelas bagi setiap guru';
  end if;
  return new;
end $$;
create or replace function jm_had_murid()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from jm_murid where kelas = new.kelas) >= 60 then
    raise exception 'had 60 murid bagi setiap kelas';
  end if;
  return new;
end $$;
drop trigger if exists jm_had_murid on jm_murid;
create trigger jm_had_murid before insert on jm_murid for each row execute function jm_had_murid();
revoke all on function jm_had_murid() from public, anon, authenticated;
