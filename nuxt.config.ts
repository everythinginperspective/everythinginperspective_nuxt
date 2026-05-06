export default defineNuxtConfig({
  // Build hooks
  hooks: {
    'prepare': async () => {
      const { execSync } = await import('child_process')
      console.log('\n📋 Building content types...')
      execSync('node scripts/build-content-types.js', { stdio: 'inherit' })
      console.log('\n🔗 Building relationship graph...')
      execSync('node scripts/build-graph.js', { stdio: 'inherit' })
    }
  },
  // Build output to .dist for Surge deployment
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
      crawlLinks: true,
      interval: 100,
      ignore: ['/api/**']
    },
    routeRules: {
      '/api/**': { cache: false, swr: false }
    }
  },
  
  // Disable payload extraction
  experimental: {
    payloadExtraction: false
  },
  ssr: true,
  
  // Site URL for SEO and sitemap
  site: {
    url: 'https://einp.surge.sh'
  },
  
  // Modules
  modules: ['@nuxt/content', '@nuxtjs/sitemap', '@nuxtjs/seo', '@nuxtjs/i18n', 'nuxt-ai-ready'],
  
  // i18n configuration
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'fr', name: 'Français', file: 'fr.json' },
      { code: 'de', name: 'Deutsch', file: 'de.json' },
      { code: 'es', name: 'Español', file: 'es.json' },
      { code: 'it', name: 'Italiano', file: 'it.json' },
      { code: 'pt', name: 'Português', file: 'pt.json' },
      { code: 'nl', name: 'Nederlands', file: 'nl.json' },
      { code: 'zh', name: '中文', file: 'zh.json' },
      { code: 'ja', name: '日本語', file: 'ja.json' },
      { code: 'ar', name: 'العربية', file: 'ar.json' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: './locales/'
  },
  
  // Sitemap config
  sitemap: {
    enabled: true
  },

  // @nuxt/content v3 configuration
  content: {
    markdown: {
      anchorLinks: false,
      // Disable mdc to avoid mdream native binding issues during prerender
      // mdc: {
      //   highlight: {
      //     theme: 'github-light'
      //   }
      // }
    },
  },

  // CSS & styling
  css: [
    '~/themes/default.css',
    '~/assets/styles/global.css'
  ],

  // App config
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Everything in Perspective',
      meta: [
        { name: 'description', content: 'Essays on trends, context & nuance' },
        { name: 'theme-color', content: '#000000' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // Generate static site at build time
  routeRules: {
    '/': { prerender: true },
    // Legacy routes (keeping for backwards compatibility)
    '/article/**': { prerender: true },
    '/perspective/**': { prerender: true },
    '/page/**': { prerender: true },
    '/book/**': { prerender: true },
    // New dynamic magazine routes
    '/magazine/**': { prerender: true },
    // Linked data routes
    '/linked-data/**': { prerender: true },
    // API routes - no cache
    '/api/**': { cache: false }
  },

  // DevTools
  devtools: { enabled: false },

  // Vue config
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('flat-')
    }
  }
})