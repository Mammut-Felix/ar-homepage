<script setup lang="ts">
import type { SocialMediaItem } from '~/types/socials/SocialMediaItem'

const socialMediaItems = await useFetch<SocialMediaItem[]>('/api/social', {
  method: 'get'
})

const sumAllFollowers = computed(() => {
  return socialMediaItems.data.value?.reduce((accumulator, item) => accumulator + item.followers, 0)
})

defineComponent({
  name: 'SocialComponent'
})
</script>

<template>
  <div class="light-background text-black section">
    <v-row class="px-8 px-md-16 py-16 max-width">
      <v-col cols="12" class="pb-16">
        <div class="flex flex-col items-center justify-center" data-aos="zoom-in">
          <h2 class="section-heading text-black">Social</h2>
        </div>
      </v-col>
      <v-col cols="12" class="pb-16">
        <p class="text-center">
          Follow us on social media to stay up to date with the latest news and updates.
        </p>
      </v-col>
      <v-col cols="12" class="pb-16 text-center">
        <NuxtImg
          src="/svg/AR_circle.svg"
          width="180px"
          height="180px"
          format="webp"
          alt="Anastasia Rose Logo"
        />
        <p class="text-h1 pt-6">
          <LazyCounter :count="sumAllFollowers" />
        </p>
        <p class="text-h5 pt-2 opacity-70">Gesamtreichweite</p>
      </v-col>
      <template v-for="socialMediaItem in socialMediaItems.data.value" :key="socialMediaItem.title">
        <v-col cols="6" md="4" class="flex justify-center pointer text-center pb-16">
          <div
            @click="navigateTo(socialMediaItem.url, { external: true, open: { target: '_blank' } })"
          >
            <font-awesome-icon :icon="socialMediaItem.icon" size="4x" />
            <p class="text-h1 pt-6">
              <LazyCounter :count="socialMediaItem.followers" />
            </p>
            <p class="text-h5 pt-2 opacity-70">{{ socialMediaItem.title }}</p>
          </div>
        </v-col>
      </template>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
.pointer {
  cursor: pointer;
}

.max-width {
  max-width: 1200px;
  margin: 0 auto;
}
.section {
  padding: 4rem 0;
}

.text-black {
  color: #000;
}

.light-background {
  background-color: #eaeff4;
  position: relative;
  padding: 0;
  contain: layout;
}

.section-heading {
  text-align: center;
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 2rem;
  text-transform: uppercase;
  text-decoration: underline;
  text-decoration-color: rgba(var(--v-theme-primary), 1);
  text-decoration-thickness: 4px;
  text-underline-offset: 0.8rem;
}
</style>
