import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://pdserocbsficnfttduty.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkc2Vyb2Nic2ZpY25mdHRkdXR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMwMDA0NDYsImV4cCI6MjAxODU3NjQ0Nn0.QFXqz1Z6z_4UhwWgIjk2Wa1rEooTmj_FAFrdONCjb8I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
