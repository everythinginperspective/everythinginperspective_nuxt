<template>
  <main class="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
    <!-- Featured content -->
    <section class="mb-16">
      <h2 class="font-serif text-3xl font-bold mb-8">Latest Essays</h2>
      <div class="space-y-8">
        <article v-for="article in (articles || []).slice(0, 3)" :key="article.id" class="mb-12 pb-12 border-b border-accent">
          <h3 class="font-serif text-2xl font-bold mb-2">{{ article.title }}</h3>
          <p class="text-muted text-sm mb-4">{{ formatDate(article.date) }} • {{ article.category || 'General' }}</p>
          <p class="text-body mb-4">{{ article.description }}</p>
          <NuxtLink :to="`/article/${article.path?.split('/').pop()}`" class="text-primary font-sans font-bold hover:underline">
            Read More →
          </NuxtLink>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

// Fetch articles from @nuxt/content (v3: queryCollection)
const { data: articles } = await useAsyncData('articles', () =>
  queryCollection('articles').order('date', 'DESC').all()
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
useSeoMeta({
  title: 'Everything in Perspective | Essays on trends, context & nuance',
  description: 'Explore essays on global trends, economic forces, technology, and human behavior. Everything in Perspective delivers nuanced analysis and contextual thinking.',
  ogTitle: 'Everything in Perspective',
  ogDescription: 'Essays on trends, context & nuance',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

// Enhanced schema.org for home page
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': 'https://einp.surge.sh/#website',
        name: 'Everything in Perspective',
        url: 'https://einp.surge.sh',
        description: 'Essays on trends, context & nuance',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://einp.surge.sh/?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        },
        sameAs: [],
        inLanguage: 'en-US'
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': 'https://einp.surge.sh/#collection',
        name: 'Everything in Perspective Essays',
        description: 'A curated collection of essays exploring global trends with nuance and context',
        url: 'https://einp.surge.sh',
        isPartOf: {
          '@id': 'https://einp.surge.sh/#website'
        },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: (articles.value || []).slice(0, 10).map((article, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: article.title,
            description: article.description,
            url: `https://einp.surge.sh/article/${article.path?.split('/').pop()}`,
            image: article.image || '/og-default.png'
          }))
        }
      })
    }
  ]
})
</script>

<style scoped>
.border-accent {
  border-color: #1a1a1a;
}
.text-muted {
  color: #666666;
}
.text-body {
  color: #000000;
}
</style>
