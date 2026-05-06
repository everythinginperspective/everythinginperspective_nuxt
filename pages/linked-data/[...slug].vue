<template>
  <main class="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
    <article v-if="content">
      <div class="mb-12 pb-8 border-b border-accent">
        <h1 class="font-serif text-5xl font-bold mb-4 leading-tight">{{ content.title }}</h1>
        <div class="flex justify-between items-baseline">
          <div>
            <p v-if="content.author" class="text-muted text-sm mb-2">By <span class="font-bold">{{ content.author }}</span></p>
            <p v-if="content.date" class="text-muted text-sm">{{ formatDate(content.date) }}</p>
          </div>
          <span v-if="content.category" class="bg-light text-xs px-3 py-1 font-sans">{{ content.category }}</span>
        </div>
      </div>

      <!-- Linked Data Info -->
      <div class="mb-12 pb-12 border-b-2 border-accent">
        <h2 class="font-serif text-2xl font-bold mb-4">Graph Connections</h2>
        <div v-if="connections" class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-if="connections.authors?.length">
            <h3 class="font-bold mb-2">Authors ({{ connections.authors.length }})</h3>
            <ul class="text-sm space-y-1">
              <li v-for="author in connections.authors" :key="author">{{ author }}</li>
            </ul>
          </div>
          <div v-if="connections.categories?.length">
            <h3 class="font-bold mb-2">Categories ({{ connections.categories.length }})</h3>
            <ul class="text-sm space-y-1">
              <li v-for="cat in connections.categories" :key="cat">{{ cat }}</li>
            </ul>
          </div>
          <div v-if="connections.tags?.length">
            <h3 class="font-bold mb-2">Tags ({{ connections.tags.length }})</h3>
            <ul class="text-sm space-y-1">
              <li v-for="tag in connections.tags" :key="tag">{{ tag }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="prose prose-lg max-w-none mb-16">
        <ContentRenderer :value="content" />
      </div>
    </article>
    <div v-else class="text-center py-12">
      <p>Content not found</p>
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const route = useRoute()
const slug = (route.params.slug as string[]).join('/')

// Fetch content by path (v3: queryCollection - infer collection from path)
const ldCollection = (slug.split('/')[0] || 'articles') as any
const { data: content } = await useAsyncData(
  `ld-${slug}`,
  () => queryCollection(ldCollection).path(`/${slug}`).first()
)

// Fetch graph for connections
const { data: graph } = await useAsyncData(
  'graph-data',
  () => $fetch('/graph.json').catch(() => null)
)

const connections = computed(() => {
  if (!graph.value?.nodes || !content.value?.path) return null
  const node = (graph.value.nodes as any[]).find(n => n.path === content.value!.path)
  return node?.connections || null
})

const formatDate = (date: string) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

// SEO
watch(() => content.value, (newContent) => {
  if (newContent) {
    useSeoMeta({
      title: `${newContent.title} | Everything in Perspective`,
      description: newContent.description,
      ogTitle: newContent.title,
      ogDescription: newContent.description
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
</style>
