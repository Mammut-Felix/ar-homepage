<script setup lang="ts">
import { ref, defineComponent } from 'vue'
import type { MenuItem } from '~/types/menu/MenuItem'

const emptyMenuItem: MenuItem = {
  title: '',
  href: '',
  visible: true,
  image: '/images/IMG_1781.webp'
}

const mobileMenu = ref(false)
const headerHeight = ref(140)
const hoveredItem = ref(emptyMenuItem)

const menuItems: MenuItem[] = [
  {
    title: 'HOME',
    href: '/',
    visible: true,
    image: '/images/IMG_1781.webp'
  },
  {
    title: 'EVENTS',
    subtitle: 'Upcoming events',
    href: '/#events',
    visible: true,
    image: '/images/IMG_1781.webp'
  },
  {
    title: 'MUSIC',
    subtitle: 'Listen to my music',
    href: '/#music',
    visible: true,
    image: '/images/IMG_1781.webp'
  },
  {
    title: 'SHOP',
    subtitle: 'Get my merch',
    href: '/#shop',
    visible: true,
    image: '/images/IMG_1781.webp'
  },
  {
    title: 'CONTACT',
    href: '/#contact',
    visible: true,
    image: '/images/IMG_1781.webp'
  }
]

defineComponent({
  name: 'HeaderComponent'
})
</script>
<template>
  <div>
    <v-overlay v-model="mobileMenu">
      <div class="mobile-menu-container">
        <v-row class="menu-items-container" align="center" no-gutters>
          <v-col cols="12" lg="6" class="d-none d-lg-block" align="center" order="2" order-lg="1">
            <div class="menu-image-container">
              <img :src="hoveredItem.image" alt="Logo" class="menu-image" />
            </div>
          </v-col>
          <v-col class="menu-item-container" cols="12" lg="6" order="1" order-lg="1">
            <template v-for="(item, index) in menuItems" :key="index">
              <v-row
                no-gutters
                :class="mobileMenu ? 'slide-in' : 'slide-out'"
                :style="'transform: translateX(-100%); animation-delay:' + index / 10 + 's;'"
                @mouseover="hoveredItem = item"
                @mouseleave="hoveredItem = emptyMenuItem"
              >
                <v-col cols="12">
                  <div
                    :class="hoveredItem.href === item.href ? 'active' : ''"
                    class="menu-item-wrapper"
                  >
                    <div style="padding-bottom: 15px">
                      <nuxt-link :to="item.href" class="menu-link">
                        <span
                          :class="hoveredItem.href === item.href ? 'active' : ''"
                          class="menu-item-text"
                          >{{ item.title }}</span
                        ><span class="menu-item-subtitle">{{ item.subtitle }}</span>
                      </nuxt-link>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </template>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" class="menu-footer" align="center">
            <nuxt-link to="#" class="menu-social-link">Instagram</nuxt-link>
            <nuxt-link to="#" class="menu-social-link">TikTok</nuxt-link>
            <nuxt-link to="#" class="menu-social-link">Twitch</nuxt-link>
            <nuxt-link to="#" class="menu-social-link">Spotify</nuxt-link>
          </v-col>
        </v-row>
      </div>
    </v-overlay>
    <v-app-bar :height="headerHeight" class="lp-header mix-blend-mode" flat>
      <v-container class="maxWidth py-sm-4 py-0">
        <v-toolbar class="d-flex align-center" :height="headerHeight * 0.6">
          <div class="">
            <Logo />
          </div>
          <div class="ml-auto d-flex menu-container" @click.stop="mobileMenu = !mobileMenu">
            <div class="menu-wrapper" :class="{ active: mobileMenu }">
              <div class="menu-bar one"></div>
              <div class="menu-bar two"></div>
            </div>
            <span class="menu-text d-none d-md-block">MENU</span>
          </div>
        </v-toolbar>
      </v-container>
    </v-app-bar>
  </div>
</template>

<style scoped lang="scss">
.mix-blend-mode {
  mix-blend-mode: difference;
}

.v-overlay {
  z-index: 100 !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.9s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes slide-in {
  100% {
    transform: translateX(0%);
  }
}

@-webkit-keyframes slide-in {
  100% {
    -webkit-transform: translateX(0%);
  }
}

@keyframes slide-out {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@-webkit-keyframes slide-out {
  0% {
    -webkit-transform: translateX(0%);
  }
  100% {
    -webkit-transform: translateX(-100%);
  }
}

.slide-in {
  animation: slide-in 0.5s forwards;
  -webkit-animation: slide-in 0.5s forwards;
}

.slide-out {
  animation: slide-out 0.5s forwards;
  -webkit-animation: slide-out 0.5s forwards;
}

// ------------------------------
//           HEADER
// ------------------------------

.v-toolbar {
  background-color: transparent;
}

.menu-item-wrapper {
  max-width: 500px;
  margin-left: 10%;
  margin-right: 10%;
  padding-top: 40px;
  border-bottom: 2px solid #eaeff4;
}

.menu-item-wrapper.active {
  border-bottom: 2px solid rgb(var(--v-theme-primary));
}

.menu-items-container {
  height: 95%;
}

.menu-link {
  text-decoration: none;
}

.menu-item-text {
  padding-left: 20px;
  font-weight: 900;
  font-size: 34px;
  line-height: 34px;
  color: #eaeff4;
  text-transform: uppercase;
  transition: all 0.5s;
}

.menu-item-subtitle {
  padding-left: 20px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #eaeff4;
  transition: all 0.5s;
}

.menu-item-text.active {
  color: rgb(var(--v-theme-primary));
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.menu-image-container {
  overflow: hidden;
  position: relative;
  max-width: 50%;
  transition: all 1s linear;
}

.menu-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: fadeIn 2s;
}

// ------------------------------
//           FOOTER
// ------------------------------

.menu-footer {
  position: absolute;
  margin-bottom: 3vh;
  bottom: 0;
}

.menu-social-link {
  color: #eaeff4;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 900;
  margin: 0 8px;

  &:hover {
    text-decoration: underline;
    text-decoration-color: rgb(var(--v-theme-primary));
    text-decoration-thickness: 3px;
    text-underline-offset: 4px;
  }
}

// ------------------------------
//           OVERLAY
// ------------------------------

.mobile-menu-container {
  position: absolute;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  min-height: 700px;
  background-color: rgba(0, 0, 0, 0.9);
}

// ------------------------------
//        MENU BUTTON
// ------------------------------

.menu-container {
  cursor: pointer;
  z-index: 1000;
  mix-blend-mode: difference;
}

.menu-text {
  font-weight: 900;
  font-size: 30px;
  line-height: 30px;
  color: #eaeff4;
  margin-left: 8px;
  font-family: 'Century Gothic Bold';
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

.one {
  top: 5px;
  animation-delay: 0.1s;
  transition: all 0.3s;
}

.two {
  top: 19px;
  transition: all 0.3s;
}
</style>
