<template>
  <main class="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
    <article v-if="content">
      <!-- Dynamic content rendering based on type -->
      <component :is="templateComponent" :content="content" />
    </article>
    <div v-else class="text-center py-12">
      <p>Content not found</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import ArticleTemplate from '~/components/magazine/ArticleTemplate.vue'
import PerspectiveTemplate from '~/components/magazine/PerspectiveTemplate.vue'
import BookTemplate from '~/components/magazine/BookTemplate.vue'
import PageTemplate from '~/components/magazine/PageTemplate.vue'
import PersonTemplate from '~/components/magazine/PersonTemplate.vue'
import LanguageTemplate from '~/components/magazine/LanguageTemplate.vue'

definePageMeta({
  layout: 'default'
})

const route = useRoute()
const type = route.params.type as string
const slug = route.params.slug as string

// Get content type info
const contentType = await getContentTypeBySingular(type)
if (!contentType) {
  throw createError({ statusCode: 404, message: 'Content type not found' })
}

// Fetch content
const { data: content } = await useAsyncData(
  `${type}-${slug}`,
  () => queryContent(`/${contentType.folder}/${slug}`).findOne()
)

// Map type to template component
const templateMap: Record<string, any> = {
  article: ArticleTemplate,
  perspective: PerspectiveTemplate,
  book: BookTemplate,
  page: PageTemplate,
  person: PersonTemplate,
  language: LanguageTemplate
}

const templateComponent = computed(() => {
  return templateMap[type] || PageTemplate // fallback to page template
})

// SEO - dynamic based on content type
watch(() => content.value, (newContent) => {
  if (newContent) {
    const imageUrl = newContent.image || '/og-default.png'
    const publishedDate = newContent.date ? new Date(newContent.date).toISOString() : new Date().toISOString()
    
    useSeoMeta({
      title: `${newContent.title} | Everything in Perspective`,
      description: newContent.description,
      ogTitle: newContent.title,
      ogDescription: newContent.description,
      ogType: type === 'article' || type === 'perspective' ? 'article' : 'website',
      ogImage: imageUrl,
      ogImageAlt: newContent.imageAlt || newContent.title,
      twitterCard: 'summary_large_image',
      twitterImage: imageUrl
    })
    
    // Schema based on type
    const schemaType = type === 'article' || type === 'perspective' ? 'NewsArticle' : 
                       type === 'book' ? 'Book' :
                       type === 'person' ? 'Person' : 'WebPage'
    
    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': schemaType,
            headline: newContent.title,
            description: newContent.description,
            image: imageUrl,
            author: newContent.author ? {
              '@type': 'Person',
              name: newContent.author
            } : undefined,
            publisher: {
              '@type': 'Organization',
              name: 'Everything in Perspective',
              logo: {
                '@type': 'ImageObject',
                url: 'https://einp.surge.sh/logo.png',
                width: 250,
                height: 60
              }
            },
            datePublished: publishedDate,
            dateModified: publishedDate
          })
        }
      ]
    })
  }
}, { immediate: true })
</script>
