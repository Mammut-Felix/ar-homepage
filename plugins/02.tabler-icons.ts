import { defineNuxtPlugin } from 'nuxt/app'
import VueTablerIcons from 'vue-tabler-icons'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VueTablerIcons)
})
