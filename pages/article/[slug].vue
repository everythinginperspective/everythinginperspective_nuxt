<template>
  <main class="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
    <article v-if="article">
      <!-- Article Metadata -->
      <div class="mb-12 pb-8 border-b border-accent">
        <h1 class="font-serif text-5xl font-bold mb-4 leading-tight">{{ article.title }}</h1>
        <div class="flex justify-between items-baseline">
          <div>
            <p class="text-muted text-sm mb-2">By <span class="font-bold">{{ article.author || 'Staff' }}</span></p>
            <p class="text-muted text-sm">{{ formatDate(article.date) }}</p>
          </div>
          <span class="bg-light text-xs px-3 py-1 font-sans">{{ article.category || 'General' }}</span>
        </div>
      </div>

      <!-- Article Content -->
      <div class="article-content prose prose-lg max-w-none mb-16">
        <ContentRenderer :value="article" />
      </div>

      <!-- Article Footer -->
      <div class="mt-16 pt-8 border-t border-accent">
        <div class="bg-light p-8 rounded">
          <h3 class="font-serif text-lg font-bold mb-3">About the Author</h3>
          <p class="text-sm text-muted">{{ article.authorBio || `${article.author || 'Staff'} is a writer exploring context, nuance, and perspective on global trends and ideas.` }}</p>
        </div>
      </div>
    </article>
    <div v-else class="text-center py-12">
      <p>Article not found</p>
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const route = useRoute()
const slug = route.params.slug as string

// Fetch article by slug (v3: queryCollection)
const { data: article } = await useAsyncData(
  `article-${slug}`,
  () => queryCollection('articles').path(`/articles/${slug}`).first()
)

const formatDate = (date: string) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

// SEO
watch(() => article.value, (newArticle) => {
  if (newArticle) {
    const imageUrl = newArticle.image || '/og-default.png'
    const publishedDate = newArticle.date ? new Date(newArticle.date).toISOString() : new Date().toISOString()
    
    useSeoMeta({
      title: `${newArticle.title} | Everything in Perspective`,
      description: newArticle.description,
      ogTitle: newArticle.title,
      ogDescription: newArticle.description,
      ogType: 'article',
      ogImage: imageUrl,
      ogImageAlt: newArticle.imageAlt || newArticle.title,
      twitterCard: 'summary_large_image',
      twitterImage: imageUrl,
      articlePublishedTime: publishedDate,
      articleModifiedTime: publishedDate,
      articleAuthor: newArticle.author || 'Everything in Perspective',
      articleSection: newArticle.category || 'General'
    })
    
    // Article schema + breadcrumbs
    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            '@id': `https://everythinginperspective.github.io/article/${slug}#article`,
            headline: newArticle.title,
            name: newArticle.title,
            description: newArticle.description,
            abstract: newArticle.description,
            image: {
              '@type': 'ImageObject',
              url: imageUrl,
              width: 1200,
              height: 630,
              name: newArticle.imageAlt || newArticle.title
            },
            author: {
              '@type': 'Person',
              name: newArticle.author || 'Everything in Perspective',
              url: 'https://everythinginperspective.github.io'
            },
            creator: {
              '@type': 'Person',
              name: newArticle.author || 'Everything in Perspective'
            },
            publisher: {
              '@type': 'Organization',
              name: 'Everything in Perspective',
              url: 'https://everythinginperspective.github.io',
              logo: {
                '@type': 'ImageObject',
                url: 'https://everythinginperspective.github.io/logo.png',
                width: 250,
                height: 60
              },
              sameAs: []
            },
            datePublished: publishedDate,
            dateModified: publishedDate,
            dateCreated: publishedDate,
            articleBody: typeof newArticle.body === 'string' ? newArticle.body.replace(/<[^>]*>/g, '') : '',
            articleSection: newArticle.category || 'General',
            keywords: typeof newArticle.keywords === 'string' ? newArticle.keywords : Array.isArray(newArticle.keywords) ? newArticle.keywords.join(', ') : newArticle.tags?.join(', ') || newArticle.category || 'perspective',
            inLanguage: 'en-US',
            isAccessibleForFree: true,
            url: `https://everythinginperspective.github.io/article/${slug}`,
            mainEntity: {
              '@type': 'NewsArticle',
              '@id': `https://everythinginperspective.github.io/article/${slug}#article`
            }
          })
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://everythinginperspective.github.io'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Articles',
                item: 'https://everythinginperspective.github.io/magazine/articles'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: newArticle.title,
                item: `https://everythinginperspective.github.io/article/${slug}`
              }
            ]
          })
        }
      ]
    })
  }
}, { immediate: true })
</script>

<style scoped>
.border-accent {
  border-color: #1a1a1a;
}
.text-muted {
  color: #666666;
}
.bg-light {
  background-color: #F5F5F5;
}
.article-content {
  line-height: 1.7;
}
.article-content :deep(p) {
  margin-bottom: 1.5rem;
}
.article-content :deep(h2) {
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  font-size: 1.75rem;
}
.article-content :deep(h3) {
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
}
</style>
