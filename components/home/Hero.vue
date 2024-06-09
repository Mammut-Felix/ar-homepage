<script setup lang="ts">
import { ArrowDownIcon } from 'vue-tabler-icons'

const callToAction = {
  title: 'New Release',
  buttonText: 'Listen now',
  href: '/#'
}

defineComponent({
  name: 'HeroComponent'
})
</script>

<template>
  <div class="hero">
    <!-- <Header /> -->
    <div class="call-to-action">
      <h1 class="cta-title slide-in-top">{{ callToAction.title }}</h1>
      <div class="slide-in-left">
        <v-btn class="cta-button" :href="callToAction.href" size="x-large" elevation="0">
          <span class="cta-button-title">{{ callToAction.buttonText }} </span>
        </v-btn>
      </div>
    </div>
    <div class="arrow-down">
      <span class="scroll-text">Scroll down</span>
      <ArrowDownIcon class="scroll-icon" size="36" color="#DFE5EF" />
    </div>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  background-image: url('/images/IMG_1781.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  animation: fadeIn 1.5s forwards;
  -webkit-animation: fadeIn 1.5s forwards;
}

.call-to-action {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.cta-title {
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 3vh;
}

.cta-button {
  color: #000;
  background-color: #dfe5ef;
  border-radius: 0 !important;
  -webkit-animation: horizontal-shaking 0.2s 3.8s 2;
  animation: horizontal-shaking 0.2s 3.8s 2;

  &:hover {
    background-color: #000;
    color: #fff;
  }
}

.cta-button-title {
  font-size: 1.3rem;
  font-weight: 900;
  text-transform: uppercase;
}

.scroll-text {
  color: #dfe5ef;
  font-size: 1rem;
  font-weight: 900;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.scroll-icon {
  opacity: 0.6;
}

.arrow-down {
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 20px;
  animation: fadeIn 1.5s 4.2s forwards;
  -webkit-animation: fadeIn 1.5s 4.2s forwards;
}

.slide-in-top {
  opacity: 0;
  transform: translateY(-100%);
  animation: slide-in-top 1s 2s forwards;
  -webkit-animation: slide-in-top 1s 2s forwards;
}

.slide-in-left {
  opacity: 0;
  transform: translateX(-100%);
  animation: slide-in-left 0.3s 3s forwards;
  -webkit-animation: slide-in-left 0.3s 3s forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes horizontal-shaking {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(5px);
  }
  50% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slide-in-top {
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}

@-webkit-keyframes slide-in-top {
  100% {
    -webkit-transform: translateY(0%);
    opacity: 1;
  }
}

@keyframes slide-in-left {
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}

@-webkit-keyframes slide-in-left {
  100% {
    -webkit-transform: translateX(0%);
    opacity: 1;
  }
}
</style>
