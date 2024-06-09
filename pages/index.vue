<script setup lang="ts">
// import type { LiveResponse } from '~/types/live/LiveResponse'

// const liveStream = await useFetch<LiveResponse>('/api/live', {
//   method: 'get'
// })

definePageMeta({
  layout: 'blank'
})

defineComponent({
  name: 'HomePage'
})
</script>

<template>
  <div>
    <Head>
      <Title>Home</Title>
      <Meta name="description" content="" />
    </Head>
    <div>
      <Hero />
      <Events />
      <Releases />
      <Social />
    </div>
  </div>
</template>
