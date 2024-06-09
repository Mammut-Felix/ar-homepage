// import this after install `@mdi/font` package
import '@/assets/scss/style.scss'
import '@mdi/font/css/materialdesignicons.css'

import { DARK_DEFAULT } from '@/theme/DarkTheme'
import { DEFAULT } from '@/theme/LightTheme'
import messages from '@/utils/locales/messages'
import { createI18n } from 'vue-i18n'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin(app => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: 'DEFAULT',
      themes: {
        DEFAULT,
        DARK_DEFAULT
      }
    },
    defaults: {
      VCard: {
        rounded: 'md',
        elevation: 10
      },

      VTextField: {
        variant: 'outlined',
        density: 'comfortable',
        color: 'primary'
      },
      VTextarea: {
        variant: 'outlined',
        density: 'comfortable',
        color: 'primary'
      },
      VSelect: {
        variant: 'outlined',
        density: 'comfortable',
        color: 'primary'
      },
      VListItem: {
        minHeight: '45px'
      },
      VTooltip: {
        location: 'top'
      },
      VBtn: {
        style: 'text-transform: capitalize; letter-spacing:0',
        rounded: 'md'
      }
    }
  })
  const i18n = createI18n({
    locale: 'de',
    messages,
    silentTranslationWarn: true,
    silentFallbackWarn: true
  })
  app.vueApp.use(vuetify)
  app.vueApp.use(i18n)
})
