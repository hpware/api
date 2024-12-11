import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://snswfsejsbbtebluzdwc.supabase.co', process.env.SUPABASE_KEY);

export default defineEventHandler(async (event) => {
    if (event.node.req.method === 'POST') {
        try {
            const {data} = await supabase.from("lovemusic_202412").select();
            return data;
        } catch (e) {
            return {
                'err': e
            };
        }
    } else {
        return {
            'err': 403
        }
    }
})