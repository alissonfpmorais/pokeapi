<template lang="html">
  <q-card class="cursor-pointer relative-position" v-ripple="isRippleEnabled">
    <q-card-media>
      <img :src="avatar">
    </q-card-media>
    <q-card-title class="capitalize center">
      <p :class="titleStyle">{{ name }}</p>
      <span v-if="number" slot="subtitle">#{{ number }}</span>
    </q-card-title>
  </q-card>
</template>

<script>
  import { QCard, QCardTitle, QCardMedia, Ripple } from 'quasar'

  export default {
    name: 'card',
    components: { QCard, QCardTitle, QCardMedia },
    directives: {
      Ripple
    },
    props: {
      avatar: { required: true },
      name: { required: true },
      number: { default: '' },
      cardType: { default: '' }
    },
    computed: {
      isRippleEnabled () { return !this.cardType || this.cardType === 'pokemons' },
      titleStyle () { return 'minor-text no-margin' }
    }
  }
</script>

<style lang="css" scoped>
  .capitalize {
    text-transform: capitalize;
  }
  .center {
    text-align: center;
  }
  .minor-text {
    font-size: 80%;
  }
</style>
