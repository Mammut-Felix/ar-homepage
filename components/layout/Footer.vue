<script setup lang="ts">
import { defineComponent } from 'vue'

defineComponent({
  name: 'FooterComponent'
})

const socialIcons = [
  {
    href: 'https://www.instagram.com/anastasia_rose_official/',
    icon: 'fa-brands fa-instagram',
    title: 'Instagram'
  },
  {
    href: 'https://www.tiktok.com/@anastasia_rose_official',
    icon: 'fa-brands fa-tiktok',
    title: 'TikTok'
  },
  {
    href: 'https://open.spotify.com/intl-de/artist/1sqLDMMHSKlhsamgNwWD0t',
    icon: 'fa-brands fa-spotify',
    title: 'Spotify'
  },
  {
    href: 'https://www.facebook.com/AnastasiaRoseOfficial',
    icon: 'fa-brands fa-facebook',
    title: 'Facebook'
  },
  {
    href: 'https://twitter.com/djanastasiarose',
    icon: 'fa-brands fa-twitter',
    title: 'Twitter'
  },
  {
    href: 'https://music.apple.com/de/artist/anastasia-rose/1452362099',
    icon: 'fa-brands fa-apple',
    title: 'Apple Music'
  },
  {
    href: 'https://twitch.tv/anastasia_rose_official',
    icon: 'fa-brands fa-twitch',
    title: 'Twitch'
  }
]

const footerMenu = [
  {
    title: 'Events',
    children: [
      {
        title: 'Upcoming Events',
        href: '/events'
      },
      {
        title: 'Past Events',
        href: '/events/past'
      }
    ]
  },
  {
    title: 'Music',
    children: [
      {
        title: 'All Music',
        href: '/music'
      },
      {
        title: 'Albums',
        href: '/music/albums'
      },
      {
        title: 'Singles',
        href: '/music/singles'
      }
    ]
  },
  {
    title: 'Shop',
    children: [
      {
        title: 'Cloths',
        href: '/shop'
      },
      {
        title: 'Merch',
        href: '/shop/merch'
      },
      {
        title: 'Parfume',
        href: '/shop/music'
      }
    ]
  },
  {
    title: 'Contact',
    children: [
      {
        title: 'Contact Me',
        href: '/contact'
      },
      {
        title: 'Book Me',
        href: '/contact/book'
      }
    ]
  }
]
</script>

<template>
  <div class="px-0 py-0 mx-0 my-0">
    <v-row no-gutters>
      <v-col cols="12" class="text-center">
        <p class="text-h2 pb-6 pt-16">Follow Me</p>
      </v-col>
      <v-col cols="12" class="text-center px-8">
        <div class="social-icon-container">
          <template v-for="icon in socialIcons" :key="icon.title">
            <div class="social-icon">
              <nuxt-link :to="icon.href" target="_blank" class="social-link">
                <font-awesome-icon :icon="icon.icon" size="xl" />
                <p class="social-title">{{ icon.title }}</p>
              </nuxt-link>
            </div>
          </template>
        </div>
      </v-col>
    </v-row>
    <v-row class="px-8 px-md-16 pt-8 pb-high" no-gutters>
      <template v-for="item in footerMenu" :key="item.title">
        <v-col cols="12" md="3" class="text-left">
          <p class="text-h3 pb-6 pt-16 text-white">{{ item.title }}</p>
          <template v-for="child in item.children" :key="child.title">
            <nuxt-link :to="child.href" class="footer-link">
              <p class="text-h6 pb-3">{{ child.title }}</p>
            </nuxt-link>
          </template>
        </v-col>
      </template>
    </v-row>
    <v-row class="px-8 px-md-16 pb-8" no-gutters>
      <v-col cols="12" md="6" class="text-center text-md-left">
        <p class="footer-text pb-4">
          Made with <span class="heart">&#10084;</span> by
          <a class="footer-link" href="https://mammutmedia.eu">Mammut Media</a>
        </p>
      </v-col>
      <v-col cols="12" md="6" class="text-center text-md-right">
        <p class="footer-text">
          <a class="footer-link pr-4" href="/impressum">Imprint</a>
          <a class="footer-link" href="/datenschutz">Privacy Policy</a>
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
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

.footer-text {
  font-size: 0.9rem;
  font-weight: 400;
  margin: 0;
}

.footer-link {
  opacity: 0.8;
  color: #eaeff4;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    opacity: 1;
    text-decoration: underline;
    text-decoration-color: rgba(var(--v-theme-primary), 1);
    text-decoration-thickness: 2px;
    text-underline-offset: 3x;
  }
}

.heart {
  color: #ff0000;
  font-size: 0.8rem;
  animation: heartbeat 1.5s infinite;
}

@keyframes heartbeat {
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1.3);
  }
  40% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.3);
  }
  80% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
