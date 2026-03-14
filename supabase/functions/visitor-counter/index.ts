import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );

  // Increment counter
  await supabase.rpc("increment_visitor_count", {});

  // Read current count
  const { data } = await supabase
    .from("visitor_counter")
    .select("count")
    .eq("id", 1)
    .single();

  return new Response(JSON.stringify({ count: data?.count ?? 0 }), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});
