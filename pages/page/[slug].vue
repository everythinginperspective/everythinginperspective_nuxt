<template>
  <main class="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
    <article v-if="page">
      <h1 class="font-serif text-4xl font-bold mb-8">{{ page.title }}</h1>
      <div class="prose prose-lg max-w-none">
        <ContentRenderer :value="page" />
      </div>
    </article>
    <div v-else class="text-center py-12">
      <p>Page not found</p>
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const route = useRoute()
const slug = route.params.slug as string

// Fetch page by slug (v3: queryCollection)
const { data: page } = await useAsyncData(
  `page-${slug}`,
  () => queryCollection('pages').path(`/pages/${slug}`).first()
)

// SEO + breadcrumbs
watch(() => page.value, (newPage) => {
  if (newPage) {
    useSeoMeta({
      title: `${newPage.title} | Everything in Perspective`,
      description: newPage.description || newPage.title
    })
    
    useHead({
      script: [
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
                name: newPage.title,
                item: `https://everythinginperspective.github.io/page/${slug}`
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
.prose :deep(p) {
  margin-bottom: 1.5rem;
  line-height: 1.7;
}
.prose :deep(h2) {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}
</style>
