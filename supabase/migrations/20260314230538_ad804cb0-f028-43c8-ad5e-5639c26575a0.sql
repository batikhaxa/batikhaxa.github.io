-- Simple visitor counter table
CREATE TABLE public.visitor_counter (
  id INTEGER PRIMARY KEY DEFAULT 1,
  count BIGINT NOT NULL DEFAULT 0
);

-- Insert initial row
INSERT INTO public.visitor_counter (id, count) VALUES (1, 0);

-- Enable RLS
ALTER TABLE public.visitor_counter ENABLE ROW LEVEL SECURITY;

-- Anyone can read the counter
CREATE POLICY "Anyone can read counter" ON public.visitor_counter FOR SELECT USING (true);

-- Allow updates via edge function
CREATE POLICY "Anyone can update counter" ON public.visitor_counter FOR UPDATE USING (true);