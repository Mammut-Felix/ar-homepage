<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core'

const displayedCount = ref(0)
const internalCount = ref(0)
let interval: number | undefined

const counter = ref(null)
const counterIsVisible = useElementVisibility(counter)

const properties = defineProps({
  count: {
    type: Number,
    default: 0
  }
})

const onChange = () => {
  clearInterval(interval)
  if (displayedCount.value === internalCount.value) return

  interval = window.setInterval(() => {
    if (displayedCount.value !== internalCount.value) {
      let change = (internalCount.value - displayedCount.value) / 10
      change = change >= 0 ? Math.ceil(change) : Math.floor(change)

      displayedCount.value += change
    }
  }, 50)
}

watch(internalCount, () => {
  onChange()
})

watch(counterIsVisible, () => {
  if (counterIsVisible.value) {
    internalCount.value = properties.count
  }
})

defineComponent({
  name: 'CounterComponent'
})
</script>

<template>
  <span ref="counter">{{ displayedCount.toLocaleString() }}</span>
</template>
