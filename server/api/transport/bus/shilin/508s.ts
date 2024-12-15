export default defineEventHandler(() =>{
    throw createError({
        statusCode: 500,
        statusMessage: '服務無法被使用!',
      })
})