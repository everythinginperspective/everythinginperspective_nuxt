<template>
  <div class="filter-container mb-8">
    <div class="flex flex-col md:flex-row gap-6">
      <!-- Categories Filter -->
      <div v-if="uniqueCategories.length > 0" class="filter-group">
        <h3 class="text-sm font-bold mb-3">Category</h3>
        <div class="space-y-2">
          <label v-for="cat in uniqueCategories" :key="cat" class="flex items-center cursor-pointer">
            <input
              type="checkbox"
              :checked="selectedCategories.includes(cat)"
              @change="toggleCategory(cat)"
              class="mr-2 cursor-pointer"
            />
            <span class="text-sm">{{ cat }}</span>
          </label>
        </div>
      </div>

      <!-- Authors Filter -->
      <div v-if="uniqueAuthors.length > 0" class="filter-group">
        <h3 class="text-sm font-bold mb-3">Author</h3>
        <div class="space-y-2">
          <label v-for="author in uniqueAuthors" :key="author" class="flex items-center cursor-pointer">
            <input
              type="checkbox"
              :checked="selectedAuthors.includes(author)"
              @change="toggleAuthor(author)"
              class="mr-2 cursor-pointer"
            />
            <span class="text-sm">{{ author }}</span>
          </label>
        </div>
      </div>

      <!-- Tags Filter -->
      <div v-if="uniqueTags.length > 0" class="filter-group">
        <h3 class="text-sm font-bold mb-3">Tags</h3>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="tag in uniqueTags"
            :key="tag"
            @click="toggleTag(tag)"
            :class="[
              'text-xs px-3 py-1 rounded border transition-colors',
              selectedTags.includes(tag)
                ? 'bg-black text-white border-black'
                : 'bg-light border-accent text-black hover:border-black'
            ]"
          >
            {{ tag }}
          </button>
        </div>
      </div>
    </div>

    <!-- Reset Button -->
    <div v-if="hasActiveFilters" class="mt-4">
      <button
        @click="resetFilters"
        class="text-xs font-semibold text-muted hover:text-black transition-colors"
      >
        Clear All Filters
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ContentItem {
  category?: string
  author?: string
  tags?: string[]
  [key: string]: any
}

interface Props {
  items: ContentItem[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  filtered: [items: ContentItem[]]
}>()

const selectedCategories = ref<string[]>([])
const selectedAuthors = ref<string[]>([])
const selectedTags = ref<string[]>([])

// Extract unique values
const uniqueCategories = computed(() => {
  const cats = new Set<string>()
  props.items.forEach(item => {
    if (item.category) cats.add(item.category)
  })
  return Array.from(cats).sort()
})

const uniqueAuthors = computed(() => {
  const authors = new Set<string>()
  props.items.forEach(item => {
    if (item.author) authors.add(item.author)
  })
  return Array.from(authors).sort()
})

const uniqueTags = computed(() => {
  const tags = new Set<string>()
  props.items.forEach(item => {
    if (item.tags && Array.isArray(item.tags)) {
      item.tags.forEach(tag => tags.add(tag))
    }
  })
  return Array.from(tags).sort()
})

const hasActiveFilters = computed(() => {
  return selectedCategories.value.length > 0 || 
         selectedAuthors.value.length > 0 || 
         selectedTags.value.length > 0
})

// Filter logic
const filteredItems = computed(() => {
  return props.items.filter(item => {
    const matchesCategory = selectedCategories.value.length === 0 || 
                           selectedCategories.value.includes(item.category)
    const matchesAuthor = selectedAuthors.value.length === 0 || 
                         selectedAuthors.value.includes(item.author)
    const matchesTags = selectedTags.value.length === 0 || 
                       (item.tags && item.tags.some(tag => selectedTags.value.includes(tag)))
    
    return matchesCategory && matchesAuthor && matchesTags
  })
})

// Emit filtered items whenever filters change
watch(() => [selectedCategories.value, selectedAuthors.value, selectedTags.value], 
  () => {
    emit('filtered', filteredItems.value)
  }, 
  { deep: true }
)

// Initial emit
onMounted(() => {
  emit('filtered', filteredItems.value)
})

const toggleCategory = (cat: string) => {
  const idx = selectedCategories.value.indexOf(cat)
  if (idx > -1) {
    selectedCategories.value.splice(idx, 1)
  } else {
    selectedCategories.value.push(cat)
  }
}

const toggleAuthor = (author: string) => {
  const idx = selectedAuthors.value.indexOf(author)
  if (idx > -1) {
    selectedAuthors.value.splice(idx, 1)
  } else {
    selectedAuthors.value.push(author)
  }
}

const toggleTag = (tag: string) => {
  const idx = selectedTags.value.indexOf(tag)
  if (idx > -1) {
    selectedTags.value.splice(idx, 1)
  } else {
    selectedTags.value.push(tag)
  }
}

const resetFilters = () => {
  selectedCategories.value = []
  selectedAuthors.value = []
  selectedTags.value = []
}
</script>

<style scoped>
.filter-container {
  background-color: #fafafa;
  padding: 1rem;
  border-radius: 0.375rem;
  border: 1px solid #e5e5e5;
}

.filter-group {
  flex: 1;
  min-width: 150px;
}

.bg-light {
  background-color: #f5f5f5;
}

.border-accent {
  border-color: #e5e5e5;
}

.text-muted {
  color: #666666;
}
</style>
