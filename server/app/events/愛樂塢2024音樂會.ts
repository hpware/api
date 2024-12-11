import supabase from '~/server/components/loadSupabase';

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