<template>
  <div>
    <!-- Perspective Header -->
    <div class="mb-12 pb-8 border-b-2 border-accent">
      <div class="text-xs uppercase tracking-wider text-accent mb-3 font-bold">Perspective</div>
      <h1 class="font-serif text-6xl font-bold mb-6 leading-tight">{{ content.title }}</h1>
      <p v-if="content.subtitle" class="text-2xl text-muted mb-6">{{ content.subtitle }}</p>
      <div class="flex justify-between items-baseline">
        <div>
          <p class="text-muted text-sm mb-2">By <span class="font-bold">{{ content.author || 'Editorial Team' }}</span></p>
          <p class="text-muted text-sm">{{ formatDate(content.date) }}</p>
        </div>
        <span v-if="content.category" class="bg-accent text-white text-xs px-3 py-1 font-sans">{{ content.category }}</span>
      </div>
    </div>

    <!-- Perspective Content -->
    <div class="perspective-content prose prose-xl max-w-none mb-16">
      <ContentRenderer :value="content" />
    </div>

    <!-- Perspective Footer -->
    <div class="mt-16 pt-8 border-t-2 border-accent">
      <div class="bg-accent text-white p-8 rounded">
        <h3 class="font-serif text-xl font-bold mb-3">This Perspective</h3>
        <p class="text-sm">{{ content.summary || 'An exploration of context, nuance, and multiple viewpoints on this topic.' }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  content: any
}>()

const formatDate = (date: string) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}
</script>

<style scoped>
.border-accent {
  border-color: #1a1a1a;
}
.text-accent {
  color: #1a1a1a;
}
.bg-accent {
  background-color: #1a1a1a;
}
.text-muted {
  color: #666666;
}
.perspective-content {
  line-height: 1.8;
  font-size: 1.125rem;
}
.perspective-content :deep(p) {
  margin-bottom: 2rem;
}
.perspective-content :deep(h2) {
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  font-size: 2rem;
}
</style>
