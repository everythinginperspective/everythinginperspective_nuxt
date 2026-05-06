<template>
  <div>
    <!-- Book Header -->
    <div class="mb-12 text-center">
      <div class="text-xs uppercase tracking-wider text-muted mb-3">Book</div>
      <h1 class="font-serif text-5xl font-bold mb-4 leading-tight">{{ content.title }}</h1>
      <p v-if="content.author" class="text-xl text-muted mb-2">by {{ content.author }}</p>
      <p v-if="content.year" class="text-sm text-muted mb-6">({{ content.year }})</p>
      <div v-if="content.image" class="max-w-md mx-auto mb-8">
        <img :src="content.image" :alt="content.title" class="w-full shadow-lg" />
      </div>
    </div>

    <!-- Book Content -->
    <div class="book-content prose prose-lg max-w-none mb-16">
      <ContentRenderer :value="content" />
    </div>

    <!-- Book Metadata -->
    <div v-if="content.isbn || content.publisher" class="mt-16 pt-8 border-t border-accent">
      <div class="bg-light p-6 rounded text-sm">
        <h3 class="font-serif text-base font-bold mb-3">Publication Details</h3>
        <p v-if="content.publisher" class="mb-1"><strong>Publisher:</strong> {{ content.publisher }}</p>
        <p v-if="content.isbn" class="mb-1"><strong>ISBN:</strong> {{ content.isbn }}</p>
        <p v-if="content.pages" class="mb-1"><strong>Pages:</strong> {{ content.pages }}</p>
      </div>
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
.bg-light {
  background-color: #F5F5F5;
}
.book-content {
  line-height: 1.7;
}
</style>
