<script setup lang="ts">
defineComponent({
  name: 'SocialComponent'
})
</script>

<template>
  <v-row class="px-8 px-md-16 max-width light-background">
    <v-col cols="12">
      <div class="flex flex-col items-center justify-center" data-aos="zoom-in">
        <h2 class="section-heading text-black">Social</h2>
      </div>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
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
