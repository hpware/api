export default defineEventHandler(async() => {
    throw createError({
        statusCode: 500,
        message: 'System Not Implemented!'
    })
})