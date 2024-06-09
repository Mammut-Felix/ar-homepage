<script setup lang="ts">
import type { MusicAlbum, ReleasesResponse } from '~/types/releases/MusicAlbum'

const selectedRelease = ref<MusicAlbum | null>(null)
const showReleaseDialog = ref(false)

const zoomScrollBackground = ref(null)

const initialScale = ref(1)
const minScale = ref(0.8)
const maxScale = ref(100)
const zoomDirection = ref('in')
const zoomIntensity = ref(3)
// const scrollDistance = ref(4000)
const scaleValue = ref(1)
const isInViewport = ref(false)
const stickContainerTop = ref(false)
const stickContainerBottom = ref(false)

const opacity = ref(0)
const fillOpacity = ref(1)

const containerTop = ref(0)
const containerBottom = ref(0)
const containerHeight = ref(0)
const contentBottom = ref(0)
const scrollProgress = ref(0)
const scrollRange = ref(0)
const isLoaded = ref(false)

const handleZoomScroll = () => {
  containerBottom.value =
    zoomScrollBackground.value?.getBoundingClientRect().bottom - window.innerHeight
  containerTop.value = zoomScrollBackground.value?.getBoundingClientRect().top
  containerHeight.value = zoomScrollBackground.value?.getBoundingClientRect().height
  contentBottom.value = containerTop.value * -1 + window.innerHeight
  scrollRange.value = containerHeight.value - window.innerHeight
  isInViewport.value = !!(containerBottom.value >= 0 && containerTop.value <= 0)

  if (!isLoaded.value && containerBottom.value < 0) {
    scaleValue.value = initialScale.value + 100 / zoomIntensity.value
    isLoaded.value = true
  }

  if (isInViewport.value) {
    scrollProgress.value = ((contentBottom.value - window.innerHeight) * 100) / scrollRange.value

    opacity.value = scrollProgress.value / 50 > 1 ? 1 : scrollProgress.value / 25
    fillOpacity.value = 1 - scrollProgress.value / 10

    if (zoomDirection.value === 'in') {
      scaleValue.value = initialScale.value + scrollProgress.value / zoomIntensity.value
    } else if (zoomDirection.value === 'out') {
      scaleValue.value = initialScale.value - scrollProgress.value / zoomIntensity.value
    }

    if (scaleValue.value < minScale.value) {
      scaleValue.value = minScale.value
    }

    if (scaleValue.value > maxScale.value) {
      scaleValue.value = maxScale.value
    }
  } else if (containerBottom.value < 0) {
    stickContainerBottom.value = true
    stickContainerTop.value = false
  } else {
    stickContainerBottom.value = false
    stickContainerTop.value = true
  }
  window.requestAnimationFrame(handleZoomScroll)
}

const releases = await useFetch<ReleasesResponse>('/api/releases', {
  method: 'post',
  body: { limit: 10, sort: { datePublished: 'asc' } }
})

const showDetails = (release: MusicAlbum) => {
  selectedRelease.value = release
  showReleaseDialog.value = true
}

const closeDialog = () => {
  showReleaseDialog.value = false
  selectedRelease.value = null
}

onMounted(() => {
  if (zoomDirection.value === 'in' && initialScale.value > maxScale.value) {
    scaleValue.value = maxScale.value
    opacity.value = 1
  } else if (zoomDirection.value === 'out' && initialScale.value < minScale.value) {
    scaleValue.value = minScale.value
    opacity.value = 0
  } else {
    scaleValue.value = initialScale.value
    opacity.value = 0
  }

  handleZoomScroll()
})

defineComponent({
  name: 'ReleasesComponent'
})
</script>

<template>
  <div ref="zoomScrollBackground" class="zoom-scroll__background">
    <div class="zoom-scroll__overlay">
      <div class="zoom-scroll__overlay" :style="[{ transform: `scale(${scaleValue}` }]">
        <svg
          version="1.2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 4519 4519"
          width="4519"
          height="4519"
        >
          <g id="Background">
            <path
              fill-rule="evenodd"
              fill="#292c33"
              d="m-0.5-0.5h4519v4519h-4519zm2335.5 2260c0-41.8-33.7-75.5-75.5-75.5-41.8 0-75.5 33.7-75.5 75.5 0 41.8 33.7 75.5 75.5 75.5 41.8 0 75.5-33.7 75.5-75.5z"
            />
          </g>
          <g id="AR-Logo">
            <path
              :fill-opacity="fillOpacity"
              d="m2240.1 2222l26.4 56.6h-29l1.8-5h18.8l-18.7-39.6-12.3 26-8.8 18.6h-6.3l26.7-56.6z"
            />
            <path
              :fill-opacity="fillOpacity"
              d="m2300.5 2237.1q0 4.6-2.2 8.1-2.1 3.5-6.2 5.3-4 1.8-11 1.8v-5.5q5.2 0 7.8-1 2.7-1.1 4.3-3.5 1.5-2.3 1.5-5.2 0-2.9-1.6-5.2-1.5-2.4-4-3.4-2.5-1-8.3-1h-10v17.7 1.6 5.5 0.6 25.7l-5.7-11.2v-45.4h11.3q9.4 0 12.8 0.8 5 1.1 8.2 4.9 3.1 3.8 3.1 9.4z"
            />
            <path :fill-opacity="fillOpacity" d="m2281.8 2256h7.1l17.5 22.6h-7.1z" />
            <path
              :fill-opacity="fillOpacity"
              d="m2216.3 2286.8l3.8 8.1h-4.2l0.3-0.7h2.7l-2.7-5.7-1.8 3.8-1.3 2.6h-0.9l3.9-8.1z"
            />
            <path
              :fill-opacity="fillOpacity"
              d="m2232.8 2286.8l3.8 8.1h-4.2l0.3-0.7h2.7l-2.7-5.7-1.8 3.8-1.3 2.6h-0.9l3.9-8.1z"
            />
            <path
              :fill-opacity="fillOpacity"
              d="m2252 2286.8l3.8 8.1h-4.2l0.2-0.7h2.7l-2.6-5.7-1.8 3.8-1.3 2.6h-0.9l3.8-8.1z"
            />
            <path
              :fill-opacity="fillOpacity"
              d="m2270 2286.8l3.8 8.1h-4.2l0.3-0.7h2.7l-2.7-5.7-1.8 3.8-1.3 2.6h-0.9l3.9-8.1z"
            />
            <path
              :fill-opacity="fillOpacity"
              d="m2283.9 2288.9q0 0.7-0.3 1.2-0.4 0.5-0.9 0.8-0.6 0.2-1.6 0.2v-0.8q0.7 0 1.1-0.1 0.4-0.2 0.6-0.5 0.2-0.3 0.2-0.8 0-0.4-0.2-0.7-0.2-0.4-0.6-0.5-0.4-0.1-1.2-0.1h-1.4v2.5 0.2 0.8 0.1 3.7l-0.9-1.6v-6.6h1.7q1.3 0 1.8 0.1 0.7 0.2 1.2 0.8 0.5 0.5 0.5 1.3z"
            />
            <path :fill-opacity="fillOpacity" d="m2281.1 2291.7h1.1l2.5 3.2h-1z" />
            <path
              :fill-opacity="fillOpacity"
              d="m2221.1 2294.9v-8.1h0.2l5.4 6.2v-6.2h0.9v8.1h-0.2l-5.4-6.1v6.1z"
            />
            <path :fill-opacity="fillOpacity" d="m2243.6 2287.5v-0.8h4.5v0.8h-1.9v7.4h-0.8v-7.4z" />
            <path :fill-opacity="fillOpacity" d="m2263.8 2286.8h0.8v8.2h-0.8z" />
            <path
              :fill-opacity="fillOpacity"
              d="m2289.5 2286.8q1.7 0 2.9 1.2 1.2 1.2 1.2 2.9 0 1.7-1.2 2.9-1.2 1.2-2.9 1.2-1.7 0-2.9-1.2-1.2-1.2-1.2-2.9 0-1.1 0.5-2.1 0.6-0.9 1.5-1.5 1-0.5 2.1-0.5zm0 0.8q-0.9 0-1.6 0.4-0.8 0.5-1.3 1.2-0.4 0.8-0.4 1.7 0 1.4 1 2.4 0.9 0.9 2.3 0.9 0.9 0 1.7-0.4 0.7-0.5 1.2-1.2 0.4-0.8 0.4-1.7 0-0.9-0.4-1.7-0.5-0.7-1.2-1.2-0.8-0.4-1.7-0.4z"
            />
            <path
              :fill-opacity="fillOpacity"
              d="m2301.5 2286.8h4.7v0.8h-3.9v2.6h3.8v0.8h-3.8v3.2h3.8v0.8h-4.6z"
            />
            <path
              :fill-opacity="fillOpacity"
              d="m2237.5 2293.3l0.7-0.4q0.7 1.3 1.6 1.3 0.4 0 0.8-0.2 0.3-0.2 0.5-0.5 0.2-0.3 0.2-0.6 0-0.4-0.3-0.8-0.3-0.5-1.3-1.3-1-0.7-1.2-1-0.4-0.6-0.4-1.2 0-0.5 0.2-1 0.2-0.4 0.7-0.6 0.4-0.3 0.9-0.3 0.6 0 1.1 0.3 0.5 0.3 1 1l-0.6 0.5q-0.5-0.6-0.8-0.8-0.3-0.1-0.7-0.1-0.4 0-0.7 0.2-0.3 0.3-0.3 0.7 0 0.3 0.1 0.5 0.1 0.3 0.4 0.6 0.1 0.1 1 0.7 1 0.8 1.4 1.4 0.3 0.6 0.3 1.2 0 0.8-0.6 1.4-0.7 0.7-1.6 0.7-0.7 0-1.3-0.4-0.5-0.4-1.1-1.3z"
            />
            <path
              :fill-opacity="fillOpacity"
              d="m2257.2 2293.3l0.7-0.4q0.7 1.3 1.6 1.3 0.4 0 0.8-0.2 0.3-0.2 0.5-0.5 0.2-0.3 0.2-0.6 0-0.4-0.3-0.8-0.4-0.5-1.3-1.3-1-0.7-1.3-1-0.4-0.6-0.4-1.2 0-0.5 0.3-1 0.2-0.4 0.7-0.6 0.4-0.3 0.9-0.3 0.6 0 1.1 0.3 0.4 0.3 1 1l-0.6 0.5q-0.5-0.6-0.8-0.8-0.3-0.1-0.7-0.1-0.5 0-0.8 0.2-0.3 0.3-0.3 0.7 0 0.3 0.1 0.5 0.1 0.3 0.4 0.6 0.2 0.1 1 0.7 1.1 0.8 1.4 1.4 0.4 0.6 0.4 1.2 0 0.8-0.6 1.4-0.7 0.7-1.6 0.7-0.7 0-1.3-0.4-0.6-0.4-1.1-1.3z"
            />
            <path
              :fill-opacity="fillOpacity"
              d="m2295.1 2293.3l0.7-0.4q0.7 1.3 1.6 1.3 0.4 0 0.7-0.2 0.4-0.2 0.5-0.5 0.2-0.3 0.2-0.6 0-0.4-0.3-0.8-0.3-0.5-1.3-1.3-1-0.7-1.2-1-0.4-0.6-0.4-1.2 0-0.5 0.2-1 0.3-0.4 0.7-0.6 0.5-0.3 1-0.3 0.5 0 1 0.3 0.5 0.3 1 1l-0.6 0.5q-0.5-0.6-0.8-0.8-0.3-0.1-0.7-0.1-0.4 0-0.7 0.2-0.3 0.3-0.3 0.7 0 0.3 0.1 0.5 0.1 0.3 0.4 0.6 0.1 0.1 1 0.7 1 0.8 1.4 1.4 0.4 0.6 0.4 1.2 0 0.8-0.7 1.4-0.6 0.7-1.6 0.7-0.7 0-1.3-0.4-0.5-0.4-1-1.3z"
            />
          </g>
        </svg>
      </div>
    </div>
    <div :style="{ opacity: opacity }" class="content text-black">
      <v-row class="px-8 px-md-16 max-width">
        <v-col cols="12">
          <div class="flex flex-col items-center justify-center" data-aos="zoom-in">
            <h2 class="section-heading">Releases</h2>
          </div>
        </v-col>
        <v-col cols="12" md="3" class="my-0 py-0">
          <v-spacer></v-spacer>
        </v-col>
        <v-col cols="12" md="6" class="pb-16">
          <p class="text-body-1 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </v-col>
        <v-col cols="12" md="3" class="my-0 py-0">
          <v-spacer></v-spacer>
        </v-col>
        <template v-for="release in releases.data.value?.releases" :key="release.id">
          <v-col cols="12" md="6" lg="4" data-aos="zoom-in">
            <Image :src="release.image" alt="2002" @play="showDetails(release)" />
          </v-col>
        </template>
      </v-row>
    </div>
    <v-overlay v-model="showReleaseDialog" class="align-center justify-center mx-8" scrim="#000000">
      <v-card class="bg-background" max-width="600px">
        <v-row>
          <v-col cols="12">
            <NuxtImg
              :src="selectedRelease?.image"
              :alt="selectedRelease?.name"
              width="600"
              height="600"
              fit="cover"
              format="webp"
              loading="lazy"
              class="w-100 h-100"
            />
          </v-col>
          <v-col cols="12" class="text-center">
            <p class="text-h2">{{ selectedRelease?.name }}</p>
            <p class="text-h5 mt-2">{{ selectedRelease?.byArtist.name }}</p>
          </v-col>
          <v-row class="mx-16 mt-4 mb-16" justify="center" align="center">
            <v-col cols="12" align="center">
              <div class="social-icon-container">
                <div class="social-icon">
                  <nuxt-link to="#" target="_blank" class="social-link">
                    <font-awesome-icon :icon="['fab', 'spotify']" size="xl" />
                    <p class="social-title">Spotify</p>
                  </nuxt-link>
                </div>
                <div class="social-icon">
                  <nuxt-link to="#" target="_blank" class="social-link">
                    <font-awesome-icon :icon="['fab', 'apple']" size="xl" />
                    <p class="social-title">Apple Music</p>
                  </nuxt-link>
                </div>
                <div class="social-icon">
                  <nuxt-link to="#" target="_blank" class="social-link">
                    <font-awesome-icon :icon="['fab', 'youtube']" size="xl" />
                    <p class="social-title">Youtube</p>
                  </nuxt-link>
                </div>
                <div class="social-icon">
                  <nuxt-link to="#" target="_blank" class="social-link">
                    <font-awesome-icon :icon="['fab', 'amazon']" size="xl" />
                    <p class="social-title">Amazon Music</p>
                  </nuxt-link>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-row>
      </v-card>
      <div class="menu-container" @click.stop="closeDialog">
        <div class="menu-wrapper" :class="{ active: true }">
          <div class="menu-bar one"></div>
          <div class="menu-bar two"></div>
        </div>
      </div>
    </v-overlay>
  </div>
</template>

<style scoped lang="scss">
.max-width {
  max-width: 1200px;
  margin: 0 auto;
}
.section {
  padding: 4rem 0;
}

.menu-container {
  cursor: pointer;
  z-index: 1000;
  position: absolute;
  top: 16px;
  right: 16px;
}

.menu-wrapper {
  width: 26px;
  height: 26px;
  cursor: pointer;
  position: relative;
}

.menu-bar {
  position: absolute;
  width: 100%;
  height: 6px;
  background: #eaeff4;
  left: 0%;
}

.menu-wrapper:hover .menu-bar.active {
  animation: none;
}

.active .one {
  top: 50%;
  left: 0%;
  transform: rotate(45deg);
}

.active .two {
  top: 50%;
  left: 0%;
  transform: rotate(-45deg);
}

.social-link {
  color: inherit;
  text-decoration: none;
}

.social-title {
  display: none;
  font-size: 0.6rem;
  font-weight: 700;
  margin-top: 5px;
  text-transform: uppercase;
  color: #333333;
  opacity: 0.8;
  transition: transform 0.3s ease;
}

.social-icon-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.social-icon {
  border-style: solid;
  border-width: 1px;
  border-color: rgba($color: #eaeff4, $alpha: 0.5);
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: #eaeff4;

  &:hover {
    background-color: #eaeff4;
    color: #333333;
  }

  &:hover .social-title {
    display: block;
  }
}

.text-black {
  color: #000;
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

.zoom-scroll__background {
  background-color: #eaeff4;
  position: relative;
  padding: 0;
  contain: layout;
}

.zoom-scroll__overlay {
  position: sticky;
  width: calc(100vw + 4px);
  height: calc(100vh + 4px);
  top: -2px;
  left: -2px;
  z-index: 20;
  overflow: hidden;
  contain: layout;
  pointer-events: none;
  margin-top: -1px;
  max-width: 100vw;
}

.zoom-scroll__overlay div {
  transform-origin: center;
}

.zoom-scroll__overlay svg {
  contain: layout;
  min-height: 101%;
  min-width: 101%;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

svg.overlay-plus {
  width: 100%;
  height: 100%;
}

.content {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-top: -10vh;
  margin-bottom: 112px;
  padding-left: 64px;
  padding-right: 64px;
  contain: layout;
}
</style>
