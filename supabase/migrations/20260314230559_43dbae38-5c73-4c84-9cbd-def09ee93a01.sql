-- Create a function to safely increment the counter
CREATE OR REPLACE FUNCTION public.increment_visitor_count()
RETURNS void
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  UPDATE public.visitor_counter SET count = count + 1 WHERE id = 1;
$$;