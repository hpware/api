export default defineEventHandler(async (event) => {
        throw createError({
            statusCode: 403,
            statusMessage: '服務無法被存取!'
          });
})