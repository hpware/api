import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://snswfsejsbbtebluzdwc.supabase.co', process.env.SUPABASE_KEY);
const urls = new URL(location.href).searchParams.get('data') || 'no data';

function write(data: string) {
    supabase.from('ahhh').insert([
        { ahhh: data }
    ]);
}
export default defineEventHandler(async (event) => {
        try {
            write(urls);
            const {data} = await supabase.from("ahhh").select();
            return data;
        } catch (e) {
            throw createError({
                statusCode: 500,
                statusMessage: '伺服器或資料庫錯誤!'
              })
        }
})