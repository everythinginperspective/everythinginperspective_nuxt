<template>
  <header class="border-b border-accent bg-secondary sticky top-0 z-50">
    <!-- Hilltopads Banner Ad -->
    <ClientOnly>
      <div class="bg-secondary py-2">
        <script async src="//untimely-hello.com/bWX/V/s.d/Gslj0mYdWIcS/keTma9Mu/Z/Uxl/kkPMT/chw/MyjGA/yKNFTfM/tbNFzBA-yPMpDlId1pN-wT" referrerpolicy="no-referrer-when-downgrade"></script>
      </div>
    </ClientOnly>
    <Breadcrumbs />
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <div class="flex justify-between items-start">
        <div>
          <NuxtLink to="/" class="text-2xl sm:text-4xl font-serif font-bold tracking-tight">
            Everything in Perspective
          </NuxtLink>
          <p class="text-muted text-xs sm:text-sm mt-2">Essays on trends, context & nuance</p>
        </div>
        <div class="hidden lg:flex gap-8 text-sm nav-main">
          <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
          <NuxtLink to="/magazine/articles" class="hover:underline">Articles</NuxtLink>
          <NuxtLink to="/magazine/perspectives" class="hover:underline">Perspectives</NuxtLink>
          <NuxtLink to="/page/faq" class="hover:underline">FAQ</NuxtLink>
          <NuxtLink to="/page/contact-us" class="hover:underline">Contact</NuxtLink>
        </div>
        <button @click="toggleNav" class="lg:hidden nav-drawer-toggle" aria-label="Toggle navigation">☰</button>
      </div>
    </div>
    
    <!-- Mobile nav drawer -->
    <nav v-if="navOpen" class="nav-drawer lg:hidden border-t border-accent bg-secondary p-4">
      <div class="space-y-4">
        <NuxtLink to="/" class="block">Home</NuxtLink>
        <NuxtLink to="/page/faq" class="block">FAQ</NuxtLink>
        <NuxtLink to="/page/contact-us" class="block">Contact</NuxtLink>
        <NuxtLink to="/page/privacy-policy" class="block">Privacy</NuxtLink>
        <NuxtLink to="/page/terms-conditions" class="block">Terms</NuxtLink>
        <NuxtLink to="/page/cookie-policy" class="block">Cookies</NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const navOpen = ref(false)

const toggleNav = () => {
  navOpen.value = !navOpen.value
}
</script>

<style scoped>
.border-accent {
  border-color: #1a1a1a;
}
.text-muted {
  color: #666666;
}
.search-wrapper {
  display: flex;
  align-items: center;
}
.search-input {
  padding: 0.25rem 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.875rem;
}
.language-select {
  padding: 0.25rem 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  cursor: pointer;
}
</style>
