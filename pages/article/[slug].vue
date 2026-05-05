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

// Fetch article by slug
const { data: article } = await useAsyncData(
  `article-${slug}`,
  () => queryContent(`/articles/${slug}`).findOne()
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
    
    // Article schema
    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: newArticle.title,
            description: newArticle.description,
            image: imageUrl,
            author: {
              '@type': 'Person',
              name: newArticle.author || 'Everything in Perspective'
            },
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
            dateModified: publishedDate,
            articleBody: newArticle.body || ''
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
