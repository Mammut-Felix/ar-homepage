// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { sentryVitePlugin } from '@sentry/vite-plugin'

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf8',

      viewport: 'width=device-width, initial-scale=1, user-scalable=no',

      htmlAttrs: {
        lang: 'en'
      },

      meta: [
        {
          charset: 'utf8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, user-scalable=no'
        },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black-translucent'
        },
        {
          name: 'apple-mobile-web-app-capable',
          content: 'yes'
        },
        {
          name: 'msapplication-TileColor',
          content: '#603cba'
        },
        {
          name: 'theme-color',
          content: '#2e0b3e'
        },
        {
          name: 'robots',
          content: 'max-image-preview:large, index, follow, max-snippet:-1, max-video-preview:-1'
        },
        {
          name: 'geo.region',
          content: 'DE-MV'
        },
        {
          name: 'geo.placename',
          content: 'Vogelsang-Warsin'
        },
        {
          name: 'geo.position',
          content: '53.725655;14.164598'
        },
        {
          name: 'ICBM',
          content: '53.725655, 14.164598'
        },
        {
          name: 'author',
          content: 'Anastasia Rose'
        },
        {
          name: 'publisher',
          content: 'AR Entertainment GmbH'
        },
        {
          name: 'copyright',
          content: 'Mr. Windel'
        },
        {
          name: 'language',
          content: 'en'
        },
        {
          name: 'op:locale',
          content: 'en_US'
        },
        {
          name: 'op:type',
          content: 'website'
        },
        {
          name: 'op:site_name',
          content: 'Anastaia Rose'
        },
        {
          name: 'op:email',
          content: 'info@anastasia-rose.de'
        },
        {
          name: 'op:title',
          content: 'Anastasia Rose'
        },
        {
          name: 'op:description',
          content:
            'Anastasia Rose, DJane aus Mecklenburg-Vorpommern, ist mit Hits wie "Hallo Ihr Kinder", "Lucky" und "Viel Glück" bekannt geworden.'
        },
        {
          name: 'op:url',
          content: 'https://anastasia-rose.de'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      ],

      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png'
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest'
        },
        {
          rel: 'mask-icon',
          href: '/safari-pinned-tab.svg',
          color: '#20262f'
        },
        {
          rel: 'shortcut icon',
          href: '/favicon.ico'
        }
      ]
    }
  },

  build: {
    transpile: [
      'vuetify',
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/free-regular-svg-icons',
      '@fortawesome/free-solid-svg-icons'
    ]
  },

  components: {
    dirs: [
      {
        path: '~/components',
        pathPrefix: false
      }
    ]
  },

  css: ['@fortawesome/fontawesome-svg-core/styles.css', '@/assets/scss/style.scss'],

  devtools: {
    enabled: true,

    vscode: {
      reuseExistingServer: true
    },

    timeline: {
      enabled: true
    }
  },

  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    'nuxt-simple-sitemap',
    '@nuxtjs/robots',
    'nuxt-aos',
    // 'nuxt-security',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    }
  ],

  nitro: {
    compressPublicAssets: true,

    serveStatic: true,

    storage: {
      data: { driver: 'vercelKV' }
    }
  },

  sitemap: {
    autoLastmod: true,
    credits: false
  },

  sourcemap: { server: true, client: true },

  ssr: true,

  typescript: {
    shim: false
  },

  vite: {
    build: {
      sourcemap: true
    },

    plugins: [
      // Put the Sentry vite plugin after all other plugins
      // sentryVitePlugin({
      //   authToken: process.env.SENTRY_AUTH_TOKEN,
      //   org: 'mammut-media',
      //   project: 'brueckensteig-foto',
      //   url: 'https://c.mammutmedia.eu'
      // })
    ],

    ssr: {
      noExternal: ['vuetify'] // add the vuetify vite plugin
    },

    vue: {
      template: {
        transformAssetUrls
      }
    }
  }
})
