<template>
  <div>
    <!-- Language Header -->
    <div class="mb-12 pb-8 border-b border-accent text-center">
      <div class="text-6xl mb-4">🌐</div>
      <h1 class="font-serif text-4xl font-bold mb-2">{{ content.title }}</h1>
      <p v-if="content.code" class="text-sm text-muted uppercase tracking-wider">Language Code: {{ content.code }}</p>
    </div>

    <!-- Language Content -->
    <div class="language-content prose prose-lg max-w-none mb-16">
      <ContentRenderer :value="content" />
    </div>

    <!-- Available Content -->
    <div class="mt-16 pt-8 border-t border-accent">
      <h3 class="font-serif text-xl font-bold mb-4">Content in {{ content.title }}</h3>
      <p class="text-sm text-muted">Articles, perspectives, and pages available in this language will be listed here.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  content: any
}>()
</script>

<style scoped>
.border-accent {
  border-color: #1a1a1a;
}
.text-muted {
  color: #666666;
}
.language-content {
  line-height: 1.7;
}
</style>
