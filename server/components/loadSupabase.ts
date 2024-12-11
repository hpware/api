import { createClient } from '@supabase/supabase-js';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient('https://snswfsejsbbtebluzdwc.supabase.co', supabaseKey);

export default supabase;