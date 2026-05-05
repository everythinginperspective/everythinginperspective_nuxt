<template>
  <div class="bg-secondary text-primary">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

// SEO setup
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
    { name: 'referrer', content: 'no-referrer-when-downgrade' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Everything in Perspective',
        url: 'https://einp.surge.sh',
        logo: 'https://einp.surge.sh/logo.png',
        description: 'Essays on trends, context & nuance',
        sameAs: []
      })
    }
  ]
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  background-color: #FFFFFF;
  color: #000000;
}

h1, h2, h3, h4, h5, h6 {
  font-family: Georgia, Garamond, serif;
  font-weight: 400;
}
</style>
