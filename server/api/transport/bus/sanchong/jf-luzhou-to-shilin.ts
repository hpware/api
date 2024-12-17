export default defineEventHandler(() =>{
    throw createError({
        statusCode: 403,
        statusMessage: "找不到API 🥲"
      })
})