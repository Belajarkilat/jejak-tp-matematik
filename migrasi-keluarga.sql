-- Mod Keluarga / Anak NaikGred untuk Matematik (14 Okt 2026). Sama seperti Sejarah (js_); Premium datang daripada
-- bayaran keluarga di Jejak TP Sains melalui mj_keluarga_sinkron(emel, tamat) (jadual mj_keluarga_emel dikongsi dengan Sejarah).
alter table jm_guru add column if not exists keluarga boolean not null default false;

create or replace function jm_keluarga_tetap() returns boolean
language plpgsql security definer set search_path = public as $$
declare t timestamptz;
begin
  if not exists (select 1 from jm_guru where id = auth.uid()) then return false; end if;
  if exists (select 1 from jm_kelas where guru = auth.uid() and nama <> 'Keluarga') then return false; end if;
  update jm_guru set keluarga = true where id = auth.uid();
  insert into jm_kelas (guru, nama) select auth.uid(), 'Keluarga'
    where not exists (select 1 from jm_kelas where guru = auth.uid());
  select e.tamat into t from mj_keluarga_emel e where lower(e.emel) = lower(coalesce(auth.jwt() ->> 'email', '')) and e.tamat > now();
  if t is not null then
    update jm_guru set premium_rendah_tamat = greatest(coalesce(premium_rendah_tamat, '-infinity'), t),
                       premium_atas_tamat = greatest(coalesce(premium_atas_tamat, '-infinity'), t) where id = auth.uid();
  end if;
  return true;
end $$;
revoke all on function jm_keluarga_tetap() from public, anon;
grant execute on function jm_keluarga_tetap() to authenticated;

-- Sinkron kini mengemas kini akaun keluarga Sejarah DAN Matematik.
create or replace function mj_keluarga_sinkron(p_emel text, p_tamat timestamptz) returns void
language plpgsql security definer set search_path = public as $$
begin
  insert into mj_keluarga_emel (emel, tamat) values (lower(p_emel), p_tamat)
    on conflict (emel) do update set tamat = greatest(mj_keluarga_emel.tamat, excluded.tamat), dikemas = now();
  update js_guru g set premium_rendah_tamat = greatest(coalesce(g.premium_rendah_tamat, '-infinity'), p_tamat),
                       premium_atas_tamat = greatest(coalesce(g.premium_atas_tamat, '-infinity'), p_tamat)
    from auth.users u where u.id = g.id and lower(u.email) = lower(p_emel) and g.keluarga;
  update jm_guru g set premium_rendah_tamat = greatest(coalesce(g.premium_rendah_tamat, '-infinity'), p_tamat),
                       premium_atas_tamat = greatest(coalesce(g.premium_atas_tamat, '-infinity'), p_tamat)
    from auth.users u where u.id = g.id and lower(u.email) = lower(p_emel) and g.keluarga;
end $$;
revoke all on function mj_keluarga_sinkron(text, timestamptz) from public, anon, authenticated;
grant execute on function mj_keluarga_sinkron(text, timestamptz) to service_role;

CREATE OR REPLACE FUNCTION public.jm_had_kelas()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
declare g jm_guru%rowtype; sendiri int; had int; pid uuid; pan jm_panitia%rowtype; guna int;
begin
  
  select * into g from jm_guru where id = new.guru;
  if coalesce(g.keluarga, false) then
    if (select count(*) from jm_kelas where guru = new.guru) >= 1 then raise exception 'had kelas bagi setiap guru'; end if;
    return new;
  end if;
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
end $function$
;
CREATE OR REPLACE FUNCTION public.jm_murid_maks(p_kelas text)
 RETURNS integer
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
  select case when exists (select 1 from jm_kelas k join jm_guru g on g.id = k.guru where k.id = p_kelas and g.keluarga) then 5 when jm_premium((select guru from jm_kelas where id = p_kelas)) then 60 else 40 end
$function$
;
revoke all on function jm_murid_maks(text) from public, anon, authenticated;
