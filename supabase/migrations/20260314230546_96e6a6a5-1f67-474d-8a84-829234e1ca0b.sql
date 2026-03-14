-- Remove permissive update policy; edge function will use service role
DROP POLICY "Anyone can update counter" ON public.visitor_counter;