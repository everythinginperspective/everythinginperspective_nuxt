import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const type = getRouterParam(event, 'type')
  const slug = getRouterParam(event, 'slug') || ''
  
  // Get content type info
  const contentType = await getContentTypeBySingular(type || '') || await getContentTypeByPlural(type || '')
  
  if (!contentType) {
    throw createError({
      statusCode: 404,
      message: 'Content type not found'
    })
  }

  try {
    // If slug is provided, get single item
    if (slug) {
      const item = await serverQueryContent(event, `/${contentType.folder}/${slug}`).findOne()
      return item
    }
    
    // Otherwise, get all items of this type
    const items = await serverQueryContent(event, `/${contentType.folder}`).find()
    return items
  } catch (error) {
    throw createError({
      statusCode: 404,
      message: 'Content not found'
    })
  }
})
