export default defineEventHandler(() =>{
    throw createError({
        statusCode: 403,
        statusMessage: "No API URL"
      })
})