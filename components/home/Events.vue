<script setup lang="ts">
import moment from 'moment'
import type { EventsResponse } from '~/types/events/Event'

const events = await useFetch<EventsResponse>('/api/events', {
  method: 'post',
  body: { limit: 5, featured: true, sort: { startDate: 'asc' }, from: moment().toISOString() }
})

defineComponent({
  name: 'EventsComponent'
})
</script>

<template>
  <div v-if="events.data.value?.events?.length > 0" class="section">
    <v-row class="px-8 px-md-16 max-width">
      <v-col cols="12">
        <div class="flex flex-col items-center justify-center" data-aos="zoom-in">
          <h2 class="section-heading">Events</h2>
        </div>
      </v-col>

      <v-col
        v-for="event in events.data.value?.events"
        :key="event.id"
        cols="12"
        data-aos="fade-down"
      >
        <v-row align="center">
          <v-col cols="12" md="10">
            <p class="text-h4 pb-3 opacity-70">
              {{ moment(event.startDate).format('YYYY-MM-DD') }}
            </p>
            <p class="text-h2 text-uppercase pb-4">{{ event.name }}</p>
            <p class="text-h4 pb-2 opacity-70">
              {{ event.location?.address.addressLocality }},
              {{ event.location?.address.addressCountry }}
            </p>
            <p class="text-h6 pb-4 pb-md-8 opacity-70">{{ event.location?.name }}</p>
          </v-col>
          <v-col cols="12" md="2" class="text-md-right pb-10 pb-md-0 h-100">
            <v-btn class="ticket-button" elevation="0" href="/events">TICKETS</v-btn>
          </v-col>
        </v-row>
        <v-divider class="my-4" />
      </v-col>
      <v-col cols="12" class="text-center pt-8" data-aos="fade-down">
        <v-btn class="ticket-button" elevation="0" href="/events">VIEW ALL EVENTS</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
.ticket-button {
  background-color: #f5f5f5;
  color: #000;
  border-radius: 0 !important;
  padding: 0.5rem 2rem;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 0.875rem;
  transition: all 0.3s;
  opacity: 0.7;

  &:hover {
    background-color: #000;
    color: #fff;
  }
}

.max-width {
  max-width: 1200px;
  margin: 0 auto;
}
.section {
  padding: 4rem 0;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
