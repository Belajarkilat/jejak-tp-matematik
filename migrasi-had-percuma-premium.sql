
create or replace function jm_premium(p_guru uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select coalesce((select coalesce(premium_rendah_tamat, '-infinity') > now() or coalesce(premium_atas_tamat, '-infinity') > now()
                   from jm_guru where id = p_guru), false)
$$;
create or replace function jm_murid_maks(p_kelas text)
returns int language sql stable security definer set search_path = public as $$
  select case when jm_premium((select guru from jm_kelas where id = p_kelas)) then 60 else 40 end
$$;
create or replace function jm_had_kelas()
returns trigger language plpgsql security definer set search_path = public as $$
declare g jm_guru%rowtype; sendiri int; had int;
begin
  
  select * into g from jm_guru where id = new.guru;
  select count(*) into sendiri from jm_kelas where guru = new.guru;
  had := (case when jm_premium(new.guru) then 5 else 2 end) + 5 * coalesce(g.paket_kelas, 0);
  if sendiri < had then return new; end if;
  raise exception 'had kelas bagi setiap guru';
end $$;
create or replace function jm_had_murid()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from jm_murid where kelas = new.kelas) >= jm_murid_maks(new.kelas) then
    raise exception 'had murid bagi setiap kelas';
  end if;
  return new;
end $$;
revoke all on function jm_premium(uuid), jm_murid_maks(text) from public, anon, authenticated;

CREATE OR REPLACE FUNCTION public.jm_guru_simpan_murid(p_kelas text, p_murid jsonb)
 RETURNS boolean
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
begin
  if not jm_milik(p_kelas) then raise exception 'bukan kelas anda'; end if;
  if jsonb_array_length(coalesce(p_murid, '[]'::jsonb)) > jm_murid_maks(p_kelas) then
    raise exception 'had murid bagi setiap kelas';
  end if;
  delete from jm_murid where kelas = p_kelas;
  insert into jm_murid(kelas, no, nama, pin)
    select p_kelas, x->>'no', x->>'nama', x->>'pin'
    from jsonb_array_elements(coalesce(p_murid, '[]'::jsonb)) x;
  delete from jm_gagal where kelas = p_kelas;
  return true;
end $function$
;
