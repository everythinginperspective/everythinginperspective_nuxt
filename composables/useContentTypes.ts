export interface ContentType {
  folder: string        // e.g., 'articles'
  singular: string      // e.g., 'article'
  plural: string        // e.g., 'articles'
  urlSingular: string   // e.g., '/magazine/article'
  urlPlural: string     // e.g., '/magazine/articles'
}

let cachedContentTypes: ContentType[] | null = null

export const useContentTypes = async () => {
  if (cachedContentTypes) {
    return cachedContentTypes
  }

  // Read from generated JSON file
  try {
    cachedContentTypes = await $fetch<ContentType[]>('/content-types.json')
    return cachedContentTypes
  } catch (error) {
    console.error('Failed to load content types:', error)
    return []
  }
}

export const getContentTypeByFolder = async (folder: string): Promise<ContentType | undefined> => {
  const types = await useContentTypes()
  return types.find(t => t.folder === folder)
}

export const getContentTypeBySingular = async (singular: string): Promise<ContentType | undefined> => {
  const types = await useContentTypes()
  return types.find(t => t.singular === singular)
}

export const getContentTypeByPlural = async (plural: string): Promise<ContentType | undefined> => {
  const types = await useContentTypes()
  return types.find(t => t.plural === plural)
}
