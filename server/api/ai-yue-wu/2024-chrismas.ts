import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://snswfsejsbbtebluzdwc.supabase.co', process.env.SUPABASE_KEY);

export default defineEventHandler(async (event) => {
    if (event.node.req.method === 'POST') {
        try {
            const {data} = await supabase.from("lovemusic_202412").select();
            return data;
        } catch (e) {
            throw createError({
                statusCode: 500,
                statusMessage: '伺服器或資料庫錯誤!'
              })
        }
    } else {
        throw createError({
            statusCode: 403,
            statusMessage: '服務無法被存取!'
          })
    }
})