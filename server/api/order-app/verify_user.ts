
export default defineEventHandler(async (event) => {
    if (event.node.req.method === 'POST') {
        try {
            
        } catch (e) {
            throw createError({
                statusCode: 500,
                statusMessage: `伺服器或資料庫錯誤! \n ${e}`
            })
        }
    } else {
        throw createError({
            statusCode: 403,
            statusMessage: '服務無法被存取!'
          })
    }
})