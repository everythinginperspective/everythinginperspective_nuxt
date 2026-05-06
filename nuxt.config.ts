export default defineNuxtConfig({
  // Build hooks
  hooks: {
    'build:before': async () => {
      console.log('\n🔗 Building relationship graph...')
      const { execSync } = await import('child_process')
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
  modules: ['@nuxt/content', '@nuxtjs/sitemap', '@nuxtjs/seo'],
  
  // Sitemap config
  sitemap: {
    enabled: true
  },

  // @nuxt/content configuration
  content: {
    sources: {
      content: {
        driver: 'fs',
        base: './content'
      }
    },
    markdown: {
      anchorLinks: false
    }
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
    '/article/**': { prerender: true },
    '/perspective/**': { prerender: true },
    '/page/**': { prerender: true },
    '/book/**': { prerender: true }
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