<template>
  <main class="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
    <div class="mb-12">
      <h1 class="font-serif text-5xl font-bold mb-4 capitalize">{{ contentType?.plural }}</h1>
      <p class="text-muted text-lg">Browse all {{ contentType?.plural }}</p>
    </div>

    <!-- Filter UI will go here once Pagefind is installed -->
    <div class="mb-8">
      <p class="text-sm text-muted">{{ (items || []).length }} {{ contentType?.plural }} found</p>
    </div>

    <!-- Content Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="item in items"
        :key="item._path"
        class="border border-accent p-6 hover:shadow-lg transition-shadow"
      >
        <NuxtLink :to="`/magazine/${contentType?.singular}/${item.slug || item._path?.split('/').pop()}`">
          <h2 class="font-serif text-2xl font-bold mb-2">{{ item.title }}</h2>
          <p v-if="item.description" class="text-muted text-sm mb-4">{{ item.description }}</p>
          <div class="text-xs text-muted">
            <span v-if="item.author">By {{ item.author }}</span>
            <span v-if="item.date"> · {{ formatDate(item.date) }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>

    <div v-if="!items || items.length === 0" class="text-center py-12 text-muted">
      <p>No {{ contentType?.plural }} found.</p>
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const route = useRoute()
const plural = route.params.plural as string

// Get content type - handle both plural and singular aliases
const contentType = await getContentTypeByPlural(plural) || 
                    (await getContentTypeBySingular(plural))

if (!contentType) {
  throw createError({ statusCode: 404, message: 'Content type not found' })
}

// Fetch all items of this type
const { data: items } = await useAsyncData(
  `${contentType.plural}-index`,
  () => queryContent(`/${contentType.folder}`).find()
)

const formatDate = (date: string) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  })
}

// SEO
useSeoMeta({
  title: `${contentType.plural} | Everything in Perspective`,
  description: `Browse all ${contentType.plural} on Everything in Perspective`,
  ogTitle: `${contentType.plural} | Everything in Perspective`,
  ogDescription: `Browse all ${contentType.plural} on Everything in Perspective`
})
</script>

<style scoped>
.border-accent {
  border-color: #e5e5e5;
}
.border-accent:hover {
  border-color: #1a1a1a;
}
.text-muted {
  color: #666666;
}
</style>
