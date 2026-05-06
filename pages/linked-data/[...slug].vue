<template>
  <main class="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
    <div v-if="item">
      <!-- Header -->
      <div class="mb-8 pb-6 border-b border-accent">
        <div class="text-sm text-muted mb-2">
          <NuxtLink to="/linked-data" class="hover:underline">Linked Data</NuxtLink>
          / {{ item.type }}
        </div>
        <h1 class="font-serif text-4xl font-bold mb-4">{{ item.title }}</h1>
        <div class="text-muted text-sm">
          Type: <span class="font-mono">{{ item.type }}/{{ item.slug }}</span>
        </div>
      </div>

      <!-- Metadata -->
      <section class="mb-12">
        <h2 class="font-serif text-2xl font-bold mb-4">Metadata</h2>
        <div class="bg-light p-6 rounded-lg">
          <dl class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="(value, key) in item.metadata" :key="key">
              <dt class="font-bold text-sm text-muted uppercase">{{ key }}</dt>
              <dd class="mt-1">{{ value }}</dd>
            </div>
          </dl>
        </div>
      </section>

      <!-- Direct Links -->
      <section class="mb-12">
        <h2 class="font-serif text-2xl font-bold mb-4">Direct Relationships</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Links To -->
          <div>
            <h3 class="font-bold mb-3 text-lg">Links To ({{ item.links_to.length }})</h3>
            <ul class="space-y-2">
              <li v-for="link in item.links_to" :key="link" class="flex items-center gap-2">
                <span class="text-xs px-2 py-1 bg-accent text-secondary rounded">
                  {{ graph[link]?.type }}
                </span>
                <NuxtLink :to="`/linked-data/${link}`" class="hover:underline">
                  {{ graph[link]?.title || link }}
                </NuxtLink>
              </li>
              <li v-if="item.links_to.length === 0" class="text-muted italic">No outgoing links</li>
            </ul>
          </div>

          <!-- Linked From -->
          <div>
            <h3 class="font-bold mb-3 text-lg">Linked From ({{ item.linked_from.length }})</h3>
            <ul class="space-y-2">
              <li v-for="link in item.linked_from" :key="link" class="flex items-center gap-2">
                <span class="text-xs px-2 py-1 bg-accent text-secondary rounded">
                  {{ graph[link]?.type }}
                </span>
                <NuxtLink :to="`/linked-data/${link}`" class="hover:underline">
                  {{ graph[link]?.title || link }}
                </NuxtLink>
              </li>
              <li v-if="item.linked_from.length === 0" class="text-muted italic">No incoming links</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- N-Degree Connections -->
      <section class="mb-12">
        <h2 class="font-serif text-2xl font-bold mb-4">Extended Network</h2>
        
        <div v-for="degree in [1, 2, 3]" :key="degree" class="mb-8">
          <h3 class="font-bold mb-3 text-lg">
            {{ degree }}-Degree Connections 
            <span class="text-muted font-normal">({{ item.degrees?.[degree]?.length || 0 }} items)</span>
          </h3>
          
          <div v-if="item.degrees?.[degree]?.length" class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div v-for="type in groupByType(item.degrees[degree])" :key="type.name" class="bg-light p-4 rounded">
              <h4 class="font-bold text-sm mb-2 uppercase text-muted">{{ type.name }}</h4>
              <ul class="space-y-1 text-sm">
                <li v-for="link in type.items.slice(0, 5)" :key="link">
                  <NuxtLink :to="`/linked-data/${link}`" class="hover:underline">
                    {{ graph[link]?.title || link }}
                  </NuxtLink>
                </li>
                <li v-if="type.items.length > 5" class="text-muted italic">
                  +{{ type.items.length - 5 }} more
                </li>
              </ul>
            </div>
          </div>
          <p v-else class="text-muted italic">No connections at this degree</p>
        </div>
      </section>

      <!-- Actions -->
      <section class="mt-12 pt-6 border-t border-accent">
        <div class="flex gap-4">
          <NuxtLink 
            v-if="item.type === 'articles'" 
            :to="`/article/${item.slug}`"
            class="px-4 py-2 bg-primary text-secondary rounded hover:bg-accent"
          >
            View Magazine Version
          </NuxtLink>
          <button 
            @click="exportJSON"
            class="px-4 py-2 border border-accent rounded hover:bg-light"
          >
            Export as JSON
          </button>
        </div>
      </section>
    </div>

    <div v-else class="text-center py-12">
      <p class="text-muted">Item not found in graph</p>
      <NuxtLink to="/linked-data" class="text-primary hover:underline mt-4 inline-block">
        Browse all items
      </NuxtLink>
    </div>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
const itemPath = (route.params.slug as string[]).join('/')

// Load graph
const { data: graphData } = await useFetch('/graph.json')
const graph = computed(() => graphData.value || {})
const item = computed(() => graph.value[itemPath])

// Group items by type
function groupByType(items: string[]) {
  if (!items) return []
  
  const grouped: Record<string, string[]> = {}
  items.forEach(item => {
    const type = item.split('/')[0]
    if (!grouped[type]) grouped[type] = []
    grouped[type].push(item)
  })
  
  return Object.entries(grouped).map(([name, items]) => ({ name, items }))
}

// Export functionality
function exportJSON() {
  const data = JSON.stringify(item.value, null, 2)
  const blob = new Blob([data], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${itemPath.replace('/', '-')}.json`
  a.click()
}

// SEO
useSeoMeta({
  title: `${item.value?.title || 'Item'} - Linked Data View`,
  description: `Explore all relationships and connections for ${item.value?.title}`,
  robots: 'noindex' // Don't index linked-data views in search
})
</script>

<style scoped>
.border-accent {
  border-color: #1a1a1a;
}
.bg-accent {
  background-color: #1a1a1a;
}
.text-accent {
  color: #1a1a1a;
}
.text-secondary {
  color: #FFFFFF;
}
.text-muted {
  color: #666666;
}
.bg-light {
  background-color: #F5F5F5;
}
</style>
