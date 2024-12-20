import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://snswfsejsbbtebluzdwc.supabase.co', process.env.SUPABASE_KEY);
const urls = new URL(location.href).searchParams.get('data') || 'no data';

function write(data: string) {
    supabase.from('ahhh').insert([
        { ahhh: data }
    ]);
}
export default defineEventHandler(async (event) => {
            write(urls);
            const {data} = await supabase.from("ahhh").select();
            return data;
})
