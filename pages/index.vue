<template>
  <main>
    <!-- Hero Section -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <div class="space-y-4 mb-12">
        <h1 class="text-5xl sm:text-6xl font-serif text-stone-900">
          Everything in Perspective
        </h1>
        <p class="text-lg sm:text-xl text-stone-600 max-w-2xl leading-relaxed">
          A curated collection of essays exploring global trends, context, and nuance. Organized by articles, perspectives, people, and languages.
        </p>
      </div>
      <!-- Rainbow accent bar -->
      <div class="h-2 w-32 rounded-full bg-gradient-to-r from-rainbow-red via-rainbow-yellow via-rainbow-green via-rainbow-blue to-rainbow-violet"></div>
    </section>

    <!-- Carousel Sections -->
    <CarouselRow 
      v-if="articles.length > 0"
      title="Latest Articles" 
      :items="articles.slice(0, 6)"
      collection-type="articles"
    />

    <CarouselRow 
      v-if="perspectives.length > 0"
      title="Perspectives" 
      :items="perspectives.slice(0, 6)"
      collection-type="perspectives"
    />

    <CarouselRow 
      v-if="people.length > 0"
      title="People" 
      :items="people.slice(0, 6)"
      collection-type="people"
    />

    <CarouselRow 
      v-if="languages.length > 0"
      title="Languages" 
      :items="languages.slice(0, 6)"
      collection-type="languages"
    />

    <!-- Footer spacer -->
    <div class="h-8"></div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

// Fetch all collections from @nuxt/content
const { data: articles } = await useAsyncData('articles', () =>
  queryCollection('articles').all()
)

const { data: perspectives } = await useAsyncData('perspectives', () =>
  queryCollection('perspectives').all()
)

const { data: people } = await useAsyncData('people', () =>
  queryCollection('people').all()
)

const { data: languages } = await useAsyncData('languages', () =>
  queryCollection('languages').all()
)

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
        '@id': 'https://everythinginperspective.github.io/#website',
        name: 'Everything in Perspective',
        url: 'https://everythinginperspective.github.io',
        description: 'Essays on trends, context & nuance',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://everythinginperspective.github.io/?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        },
        sameAs: [],
        inLanguage: 'en-US'
      })
    }
  ]
})
</script>

