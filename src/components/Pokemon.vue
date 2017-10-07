<template lang="html">
  <q-card class="clickacle">
    <q-card-media>
      <img :src="avatar">
    </q-card-media>
    <q-card-title class="center capitalize">
      {{ name }}
      <span slot="subtitle">#{{ number }}</span>
    </q-card-title>
  </q-card>
</template>

<script>
  import { QCard, QCardTitle, QCardMedia } from 'quasar'

  export default {
    name: 'pokemon',
    components: { QCard, QCardTitle, QCardMedia },
    props: {
      number: { required: true },
      avatar: { required: true },
      name: { required: true }
    }
  }
</script>

<style scped>
  .clickacle {
    cursor: pointer;
    display: flex;
    flex-direction: column;
  }
  .capitalize {
    text-transform: capitalize;
  }
  .center {
    text-align: center;
  }
</style>
