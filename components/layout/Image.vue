<script setup lang="ts">
const emit = defineEmits(['play'])

const properties = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  }
})
defineComponent({
  name: 'ImageComponent'
})
</script>

<template>
  <div>
    <v-hover v-slot="{ isHovering, props }">
      <div class="position-relative" v-bind="props">
        <NuxtImg
          :src="properties.src"
          :alt="properties.alt"
          width="1024"
          height="1024"
          fit="inside"
          format="webp"
          loading="lazy"
          class="w-100 h-100"
          @play="emit('play')"
        />

        <v-overlay
          :model-value="isHovering ? true : false"
          class="align-center justify-center"
          scrim="#000000"
          contained
          @click="emit('play')"
        >
          <v-btn variant="plain" size="x-large" icon @click="emit('play')">
            <v-icon size="60px" class="text-white">mdi-play-circle-outline</v-icon>
          </v-btn>
        </v-overlay>
      </div>
    </v-hover>
  </div>
</template>
