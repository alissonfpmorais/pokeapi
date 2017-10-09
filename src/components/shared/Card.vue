<template lang="html">
  <div>
    <q-card :class="cursorStyle" v-ripple="isRippleEnabled" @click="openDetails">
      <q-card-media>
        <img :src="avatar" :alt="name">
      </q-card-media>
      <q-card-title class="capitalize center">
        <p :class="titleStyle">{{ name }}</p>
        <span v-if="number" slot="subtitle">#{{ number }}</span>
      </q-card-title>
    </q-card>
    <q-modal ref="detailsModal" maximized>
      <q-modal-layout>
        <q-list>
          <q-list-header>
            <img :src="avatar" :alt="name">
            {{ name }}
          </q-list-header>

          <div class="" >
            <p>Weight:</p>
            <q-item>
              <q-item-tile>{{ details.weight }}</q-item-tile>
            </q-item>
          </div>

          <div class="height">
            <p>Height:</p>
            <q-item>
              <q-item-tile>{{ details.height }}</q-item-tile>
            </q-item>
          </div>

          <div class="types" color="blue">
            <p>Types:</p>
            <q-item v-for="type in details.types" :key="type">
              <q-item-tile>{{ type }}</q-item-tile>
            </q-item>
          </div>

          <div class="stats">
            <p>Stats:</p>
            <q-item v-for="stat in details.stats" :key="stat">
              <q-item-tile>{{ stat.name }} = {{ stat.value }}</q-item-tile>
            </q-item>
          </div>

          <div class="abilities">
            <p>Abilities:</p>
            <q-item v-for="ability in details.abilities" :key="ability">
              <q-item-tile>{{ ability }}</q-item-tile>
            </q-item>
          </div>

          <div class="moves">
            <p>Moves:</p>
            <q-item v-for="move in details.moves" :key="move">
              <q-item-tile>{{ move }}</q-item-tile>
            </q-item>
          </div>

        </q-list>
      </q-modal-layout>
    </q-modal>
  </div>
</template>

<script>
  import {
    QCard,
    QCardTitle,
    QCardMedia,
    Ripple,
    QModal,
    QModalLayout,
    QList,
    QListHeader,
    QItem,
    QItemTile
  } from 'quasar'
  import { getDetails } from '../../js/fetch/index'

  export default {
    name: 'card',
    components: {
      QCard,
      QCardTitle,
      QCardMedia,
      QModal,
      QModalLayout,
      QList,
      QListHeader,
      QItem,
      QItemTile
    },
    directives: {
      Ripple
    },
    props: {
      avatar: { required: true },
      name: { required: true },
      number: { default: '' },
      cardType: { default: '' }
    },
    data () {
      return {
        details: {}
      }
    },
    computed: {
      cursorStyle () {
        if (this.cardType === 'items') return 'relative-position'
        return 'cursor-pointer relative-position'
      },
      isRippleEnabled () { return this.cardType !== 'items' },
      titleStyle () { return 'minor-text no-margin' }
    },
    methods: {
      async openDetails () {
        if (this.cardType === 'pokemons') {
          this.details = await getDetails(this.number)
          console.log(this.details)

          let modal = this.$refs.detailsModal
          modal.open()
        }
      }
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
