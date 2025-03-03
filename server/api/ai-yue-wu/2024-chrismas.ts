export default defineEventHandler(async (event) => {
        throw createError({
            statusCode: 403,
            message: '服務無法被存取!'
          });
})