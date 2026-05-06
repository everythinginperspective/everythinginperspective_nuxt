<template>
  <div>
    <!-- Page Header -->
    <div class="mb-12 pb-8 border-b border-accent">
      <h1 class="font-serif text-4xl font-bold mb-4 leading-tight">{{ content.title }}</h1>
      <p v-if="content.description" class="text-lg text-muted">{{ content.description }}</p>
    </div>

    <!-- Page Content -->
    <div class="page-content prose prose-lg max-w-none">
      <ContentRenderer :value="content" />
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
.page-content {
  line-height: 1.7;
}
</style>
