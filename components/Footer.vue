<template>
  <footer class="bg-stone-900 text-stone-50 mt-16 sm:mt-24 py-12 sm:py-16 border-t border-stone-700">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
        <div>
          <h4 class="font-serif font-normal text-lg sm:text-xl text-stone-50 mb-4">Magazine</h4>
          <ul class="space-y-3 text-sm">
            <li><NuxtLink to="/" class="text-stone-300 hover:text-stone-50 transition-colors no-underline hover:underline">Home</NuxtLink></li>
            <li><a href="/sitemap.xml" class="text-stone-300 hover:text-stone-50 transition-colors no-underline hover:underline">Sitemap</a></li>
            <!-- <li><a href="/feed.xml" class="text-stone-300 hover:text-stone-50 no-underline hover:underline">RSS</a></li> -->
          </ul>
        </div>
        <div>
          <h4 class="font-serif font-normal text-lg sm:text-xl text-stone-50 mb-4">Brand</h4>
          <ul class="space-y-3 text-sm">
            <li><NuxtLink to="/page/about" class="text-stone-300 hover:text-stone-50 transition-colors no-underline hover:underline">About</NuxtLink></li>
            <li><NuxtLink to="/page/faq" class="text-stone-300 hover:text-stone-50 transition-colors no-underline hover:underline">FAQ</NuxtLink></li>
            <li><NuxtLink to="/page/contact-us" class="text-stone-300 hover:text-stone-50 transition-colors no-underline hover:underline">Contact</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h4 class="font-serif font-normal text-lg sm:text-xl text-stone-50 mb-4">Legal</h4>
          <ul class="space-y-3 text-sm">
            <li><NuxtLink to="/page/privacy-policy" class="text-stone-300 hover:text-stone-50 transition-colors no-underline hover:underline">Privacy Policy</NuxtLink></li>
            <li><NuxtLink to="/page/terms-conditions" class="text-stone-300 hover:text-stone-50 transition-colors no-underline hover:underline">Terms & Conditions</NuxtLink></li>
            <li><NuxtLink to="/page/cookie-policy" class="text-stone-300 hover:text-stone-50 transition-colors no-underline hover:underline">Cookie Policy</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h4 class="font-serif font-normal text-lg sm:text-xl text-stone-50 mb-4">Everything</h4>
          <p class="text-sm text-stone-300 leading-relaxed">
            A magazine-style archive of essays, people, languages and perspectives, arranged with context first.
          </p>
          <div class="mt-4 h-1.5 w-full rounded-full bg-gradient-to-r from-rainbow-red via-rainbow-yellow via-rainbow-green via-rainbow-blue to-rainbow-violet"></div>
        </div>
      </div>
      <div class="border-t border-stone-700 pt-8 sm:pt-10">
        <div class="py-4 mb-4" v-html="hilltopadsScript"></div>
        <p class="text-xs text-center text-stone-400">&copy; 2026 Everything in Perspective. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const hilltopadsScript = '<script async src="//untimely-hello.com/bWX/V/s.d/Gslj0mYdWIcS/keTma9Mu/Z/Uxl/kkPMT/chw/MyjGA/yKNFTfM/tbNFzBA-yPMpDlId1pN-wT" referrerpolicy="no-referrer-when-downgrade"><\/script>'
</script>
