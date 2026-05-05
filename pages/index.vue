<template>
  <main class="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
    <!-- Featured content -->
    <section class="mb-16">
      <h2 class="font-serif text-3xl font-bold mb-8">Latest Essays</h2>
      <div class="space-y-8">
        <article v-for="article in articles.slice(0, 3)" :key="article._id" class="mb-12 pb-12 border-b border-accent">
          <h3 class="font-serif text-2xl font-bold mb-2">{{ article.title }}</h3>
          <p class="text-muted text-sm mb-4">{{ formatDate(article.date) }} • {{ article.category || 'General' }}</p>
          <p class="text-body mb-4">{{ article.description }}</p>
          <NuxtLink :to="`/article/${article._path?.split('/').pop()}`" class="text-primary font-sans font-bold hover:underline">
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

// Fetch articles from @nuxt/content
const { data: articles } = await useAsyncData('articles', () => 
  queryContent('/articles').sort({ date: -1 }).find()
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
  title: 'Everything in Perspective',
  description: 'Essays on trends, context & nuance',
  ogTitle: 'Everything in Perspective',
  ogDescription: 'Essays on trends, context & nuance',
  ogType: 'website'
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
