<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
const themeStore = useThemeStore()

defineComponent({
  name: 'DefaultLayout'
})
</script>
<template>
  <v-app :theme="themeStore.theme">
    <Header />
    <NuxtPage />
    <Footer />
  </v-app>
</template>
