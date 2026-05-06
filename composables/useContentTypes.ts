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

  // During SSR/prerender, read from filesystem
  if (import.meta.server) {
    try {
      const { readFileSync } = await import('fs')
      const { join } = await import('path')
      const filePath = join(process.cwd(), 'public', 'content-types.json')
      const content = readFileSync(filePath, 'utf-8')
      cachedContentTypes = JSON.parse(content)
      return cachedContentTypes
    } catch (error) {
      console.error('Failed to load content types from filesystem:', error)
      return []
    }
  }
  
  // Client-side: fetch from public URL
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
