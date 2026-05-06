<template>
  <div>
    <!-- Person Header -->
    <div class="mb-12 text-center">
      <div v-if="content.image" class="mb-6">
        <img :src="content.image" :alt="content.title" class="w-32 h-32 rounded-full mx-auto object-cover" />
      </div>
      <h1 class="font-serif text-4xl font-bold mb-2">{{ content.title }}</h1>
      <p v-if="content.role" class="text-lg text-muted mb-4">{{ content.role }}</p>
      <div v-if="content.social" class="flex justify-center gap-4 text-sm">
        <a v-if="content.social.twitter" :href="content.social.twitter" class="text-accent hover:underline">Twitter</a>
        <a v-if="content.social.linkedin" :href="content.social.linkedin" class="text-accent hover:underline">LinkedIn</a>
        <a v-if="content.social.website" :href="content.social.website" class="text-accent hover:underline">Website</a>
      </div>
    </div>

    <!-- Bio Content -->
    <div class="person-content prose prose-lg max-w-none mb-16">
      <ContentRenderer :value="content" />
    </div>

    <!-- Articles by this person (if available) -->
    <div class="mt-16 pt-8 border-t border-accent">
      <h3 class="font-serif text-xl font-bold mb-4">Contributions</h3>
      <p class="text-sm text-muted">Articles and perspectives by {{ content.title }} will appear here.</p>
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
.text-accent {
  color: #1a1a1a;
}
.text-muted {
  color: #666666;
}
.person-content {
  line-height: 1.7;
}
</style>
