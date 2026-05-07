<template>
  <section class="py-12 sm:py-16 border-b border-stone-200">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Section Header -->
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-3xl sm:text-4xl font-serif text-stone-900">
          {{ title }}
        </h2>
        <div class="flex gap-4">
          <button 
            @click="scrollLeft" 
            class="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center text-stone-600 hover:text-stone-900 hover:border-stone-900 transition-colors disabled:opacity-50"
            :disabled="!canScrollLeft"
          >
            ←
          </button>
          <button 
            @click="scrollRight" 
            class="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center text-stone-600 hover:text-stone-900 hover:border-stone-900 transition-colors disabled:opacity-50"
            :disabled="!canScrollRight"
          >
            →
          </button>
        </div>
      </div>

      <!-- Carousel Container -->
      <div 
        ref="carouselRef"
        class="overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-4 px-4"
      >
        <div class="inline-flex gap-6 w-full">
          <div 
            v-for="item in items" 
            :key="item.id || item._path"
            class="flex-none w-64 sm:w-72"
          >
            <!-- Card -->
            <div class="bg-stone-100 border border-stone-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group snap-start">
              <!-- Placeholder image -->
              <div class="w-full h-48 bg-gradient-to-br from-rainbow-red via-rainbow-yellow to-rainbow-orange flex items-center justify-center text-white text-sm font-sans">
                {{ item.title?.substring(0, 3).toUpperCase() }}
              </div>
              <!-- Content -->
              <div class="p-5 sm:p-6">
                <h3 class="font-serif text-lg sm:text-xl text-stone-900 mb-2 line-clamp-2 group-hover:text-rainbow-blue transition-colors">
                  {{ item.title }}
                </h3>
                <p class="text-stone-600 text-sm leading-relaxed line-clamp-3 mb-4">
                  {{ item.description || 'No description available' }}
                </p>
                <NuxtLink 
                  :to="getItemLink(item)"
                  class="inline-block text-sm font-sans text-rainbow-blue hover:text-rainbow-indigo underline transition-colors"
                >
                  Read More →
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  items: any[]
  collectionType?: string // 'articles', 'perspectives', 'people', 'languages'
}>()

const carouselRef = ref<HTMLElement>()
const canScrollLeft = ref(false)
const canScrollRight = ref(true)

const checkScroll = () => {
  if (!carouselRef.value) return
  const el = carouselRef.value
  canScrollLeft.value = el.scrollLeft > 0
  canScrollRight.value = el.scrollLeft < el.scrollWidth - el.clientWidth - 10
}

const scrollLeft = () => {
  if (carouselRef.value) {
    carouselRef.value.scrollBy({ left: -320, behavior: 'smooth' })
    setTimeout(checkScroll, 300)
  }
}

const scrollRight = () => {
  if (carouselRef.value) {
    carouselRef.value.scrollBy({ left: 320, behavior: 'smooth' })
    setTimeout(checkScroll, 300)
  }
}

const getItemLink = (item: any) => {
  // Build path based on content structure
  const path = item._path || ''
  if (path.includes('articles')) return `/magazine/articles/${item._id}`
  if (path.includes('perspectives')) return `/magazine/perspectives/${item._id}`
  if (path.includes('people')) return `/magazine/people/${item._id}`
  if (path.includes('languages')) return `/magazine/languages/${item._id}`
  return '/'
}

onMounted(() => {
  checkScroll()
  if (carouselRef.value) {
    carouselRef.value.addEventListener('scroll', checkScroll)
  }
})

onUnmounted(() => {
  if (carouselRef.value) {
    carouselRef.value.removeEventListener('scroll', checkScroll)
  }
})
</script>
