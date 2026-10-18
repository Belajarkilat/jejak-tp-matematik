-- Rujukan lawatan (18 Okt 2026): lajur rujuk = hos laman yang membawa pelawat
-- (document.referrer, tanpa www.), atau 'langsung' jika tiada, ditambah '|app-<nama>'
-- jika dibuka dalam pelayar app (Facebook, Instagram, Threads, TikTok, Telegram, Line).
alter table jm_ping add column if not exists rujuk text not null default '';

drop function if exists public.jm_ping(text, text, text, integer, text);
CREATE OR REPLACE FUNCTION public.jm_ping(p_jenis text, p_peranti text, p_bab text DEFAULT NULL::text, p_aras integer DEFAULT NULL::integer, p_nota text DEFAULT ''::text, p_rujuk text DEFAULT ''::text)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
begin
  if p_jenis not in ('buka','hentian','ralat','lawat','klik') then return; end if;
  if p_peranti !~ '^[a-z0-9]{8}$' then return; end if;
  if p_bab is not null and p_bab !~ '^m[1-5]b[0-9]{1,2}$' then return; end if;
  if (select count(*) from jm_ping
      where peranti = p_peranti and masa > now() - interval '1 day') >= 300 then
    return;
  end if;
  insert into jm_ping (jenis, bab, aras, peranti, nota, rujuk)
  values (p_jenis, p_bab,
          case when p_aras between 1 and 6 then p_aras end,
          p_peranti, left(coalesce(p_nota,''), 300),
          left(regexp_replace(lower(coalesce(p_rujuk,'')), '[^a-z0-9.:|_-]', '', 'g'), 100));
end $function$;
grant execute on function public.jm_ping(text, text, text, integer, text, text) to anon, authenticated;
notify pgrst, 'reload schema';
