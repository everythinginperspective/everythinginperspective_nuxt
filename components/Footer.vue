<template>
  <footer class="bg-accent text-secondary mt-16 sm:mt-24 py-8 sm:py-12 border-t border-primary">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
        <div>
          <h4 class="font-serif font-bold mb-4">Magazine</h4>
          <ul class="text-xs sm:text-sm space-y-2">
            <li><NuxtLink to="/" class="hover:underline">Home</NuxtLink></li>
            <li><a href="/sitemap.xml" class="hover:underline">Sitemap</a></li>
            <li><a href="/feed.xml" class="hover:underline">RSS</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-serif font-bold mb-4">Brand</h4>
          <ul class="text-xs sm:text-sm space-y-2">
            <li><NuxtLink to="/page/about" class="hover:underline">About</NuxtLink></li>
            <li><NuxtLink to="/page/faq" class="hover:underline">FAQ</NuxtLink></li>
            <li><NuxtLink to="/page/contact-us" class="hover:underline">Contact</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h4 class="font-serif font-bold mb-4">Legal</h4>
          <ul class="text-xs sm:text-sm space-y-2">
            <li><NuxtLink to="/page/privacy-policy" class="hover:underline">Privacy</NuxtLink></li>
            <li><NuxtLink to="/page/terms-conditions" class="hover:underline">Terms</NuxtLink></li>
            <li><NuxtLink to="/page/cookie-policy" class="hover:underline">Cookies</NuxtLink></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-primary pt-6 sm:pt-8 text-xs text-center text-secondary">
        <p>&copy; 2026 Everything in Perspective. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.bg-accent {
  background-color: #1a1a1a;
}
.border-primary {
  border-color: #000000;
}
</style>
