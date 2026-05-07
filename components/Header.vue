<template>
  <header class="sticky top-0 z-50">
    <!-- Hilltopads Banner Ad (optional) -->
    <div class="bg-stone-50 py-2" v-html="hilltopadsScript"></div>
    <Breadcrumbs />
    <div class="bg-stone-50 border-b border-stone-200">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div class="flex justify-between items-start">
          <!-- Logo/Branding -->
          <div class="flex-1">
            <NuxtLink to="/" class="inline-block">
              <h1 class="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal tracking-tight text-stone-900">
                Everything in Perspective
              </h1>
            </NuxtLink>
            <p class="text-stone-600 text-xs sm:text-sm mt-1 sm:mt-2">Essays on trends, context & nuance</p>
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex gap-8 text-sm nav-main items-center ml-12">
            <NuxtLink to="/" class="text-stone-900 no-underline hover:text-rainbow-blue hover:underline transition-colors">
              Home
            </NuxtLink>
            <NuxtLink to="/magazine/articles" class="text-stone-900 no-underline hover:text-rainbow-blue hover:underline transition-colors">
              Articles
            </NuxtLink>
            <NuxtLink to="/magazine/perspectives" class="text-stone-900 no-underline hover:text-rainbow-blue hover:underline transition-colors">
              Perspectives
            </NuxtLink>
            <NuxtLink to="/page/faq" class="text-stone-900 no-underline hover:text-rainbow-blue hover:underline transition-colors">
              FAQ
            </NuxtLink>
            <NuxtLink to="/page/contact-us" class="text-stone-900 no-underline hover:text-rainbow-blue hover:underline transition-colors">
              Contact
            </NuxtLink>
            <SearchBar />
          </nav>

          <!-- Mobile Menu Toggle -->
          <button 
            @click="navOpen = !navOpen" 
            class="lg:hidden nav-drawer-toggle text-stone-900 text-2xl p-2 hover:text-rainbow-blue transition-colors"
            :aria-label="navOpen ? 'Close navigation' : 'Open navigation'"
            :aria-expanded="navOpen"
          >
            {{ navOpen ? '✕' : '☰' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <nav 
      v-if="navOpen"
      class="nav-drawer lg:hidden fixed inset-y-0 left-0 w-xs max-w-xs bg-stone-900 text-stone-50 p-6 overflow-y-auto"
      @click.self="navOpen = false"
    >
      <button 
        @click="navOpen = false"
        class="absolute top-6 right-6 text-stone-50 text-2xl p-2 hover:text-rainbow-yellow transition-colors"
        aria-label="Close navigation"
      >
        ✕
      </button>
      <div class="space-y-6 mt-12">
        <NuxtLink 
          to="/" 
          class="block text-lg font-serif text-stone-50 hover:text-rainbow-yellow transition-colors"
          @click="navOpen = false"
        >
          Home
        </NuxtLink>
        <NuxtLink 
          to="/magazine/articles" 
          class="block text-lg font-serif text-stone-50 hover:text-rainbow-yellow transition-colors"
          @click="navOpen = false"
        >
          Articles
        </NuxtLink>
        <NuxtLink 
          to="/magazine/perspectives" 
          class="block text-lg font-serif text-stone-50 hover:text-rainbow-yellow transition-colors"
          @click="navOpen = false"
        >
          Perspectives
        </NuxtLink>
        <NuxtLink 
          to="/page/faq" 
          class="block text-lg font-serif text-stone-50 hover:text-rainbow-yellow transition-colors"
          @click="navOpen = false"
        >
          FAQ
        </NuxtLink>
        <NuxtLink 
          to="/page/contact-us" 
          class="block text-lg font-serif text-stone-50 hover:text-rainbow-yellow transition-colors"
          @click="navOpen = false"
        >
          Contact
        </NuxtLink>
        <div class="border-t border-stone-700 pt-6 mt-6">
          <NuxtLink 
            to="/page/privacy-policy" 
            class="block text-sm text-stone-300 hover:text-stone-50 transition-colors mb-4"
            @click="navOpen = false"
          >
            Privacy Policy
          </NuxtLink>
          <NuxtLink 
            to="/page/terms-conditions" 
            class="block text-sm text-stone-300 hover:text-stone-50 transition-colors mb-4"
            @click="navOpen = false"
          >
            Terms & Conditions
          </NuxtLink>
          <NuxtLink 
            to="/page/cookie-policy" 
            class="block text-sm text-stone-300 hover:text-stone-50 transition-colors"
            @click="navOpen = false"
          >
            Cookie Policy
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const navOpen = ref(false)

const hilltopadsScript = '<script async src="//untimely-hello.com/bWX/V/s.d/Gslj0mYdWIcS/keTma9Mu/Z/Uxl/kkPMT/chw/MyjGA/yKNFTfM/tbNFzBA-yPMpDlId1pN-wT" referrerpolicy="no-referrer-when-downgrade"><\/script>'
</script>
