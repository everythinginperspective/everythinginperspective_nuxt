<template>
  <div>
    <!-- Article Metadata -->
    <div class="mb-12 pb-8 border-b border-accent">
      <h1 class="font-serif text-5xl font-bold mb-4 leading-tight">{{ content.title }}</h1>
      <div class="flex justify-between items-baseline">
        <div>
          <p class="text-muted text-sm mb-2">By <span class="font-bold">{{ content.author || 'Staff' }}</span></p>
          <p class="text-muted text-sm">{{ formatDate(content.date) }}</p>
        </div>
        <span class="bg-light text-xs px-3 py-1 font-sans">{{ content.category || 'General' }}</span>
      </div>
    </div>

    <!-- Article Content -->
    <div class="article-content prose prose-lg max-w-none mb-16">
      <ContentRenderer :value="content" />
    </div>

    <!-- Article Footer -->
    <div class="mt-16 pt-8 border-t border-accent">
      <div class="bg-light p-8 rounded">
        <h3 class="font-serif text-lg font-bold mb-3">About the Author</h3>
        <p class="text-sm text-muted">{{ content.authorBio || `${content.author || 'Staff'} is a writer exploring context, nuance, and perspective on global trends and ideas.` }}</p>
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
