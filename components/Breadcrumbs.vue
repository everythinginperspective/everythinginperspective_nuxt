<template>
  <nav v-if="breadcrumbs.length > 1" class="breadcrumbs-nav">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-3 text-sm">
      <ol class="flex flex-wrap gap-2 items-center">
        <li v-for="(crumb, index) in breadcrumbs" :key="crumb.to" class="flex items-center gap-2">
          <NuxtLink
            :to="crumb.to"
            :class="[
              'hover:underline transition-colors',
              index === breadcrumbs.length - 1 ? 'text-muted font-semibold cursor-default pointer-events-none' : 'text-primary'
            ]"
          >
            {{ crumb.label }}
          </NuxtLink>
          <span v-if="index < breadcrumbs.length - 1" class="text-muted">/</span>
        </li>
      </ol>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { breadcrumbs } = useBreadcrumbs()
</script>

<style scoped>
.breadcrumbs-nav {
  border-b: 1px solid #e5e5e5;
  background-color: #fafafa;
}

.text-muted {
  color: #666666;
}

.text-primary {
  color: #000000;
}
</style>
