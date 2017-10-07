<template>
  <q-layout>
    <q-infinite-scroll :handler="loadMore" class="list">
      <div class="gallery">
        <div v-for="pokemon in pokemons" class="gallery-item">
          <pokemon :number="pokemon.number" :avatar="pokemon.image" :name="pokemon.name" />
        </div>
      </div>
      <q-spinner-dots slot="message" :size="40"></q-spinner-dots>
    </q-infinite-scroll>
    <q-fixed-position corner="bottom-right" :offset="[30, 30]">
      <q-btn class="animate-pop" color="primary" round
          v-back-to-top.animate="{offset: 1000, duration: 200}" >
        <q-icon name="keyboard_arrow_up" />
      </q-btn>
    </q-fixed-position>
  </q-layout>
</template>

<script>
  import axios from 'axios'
  import Pokemon from './Pokemon.vue'
  import { getPokemonList, getPokemonAvatar } from '../js/endpoints/index'
  import { QLayout, QInfiniteScroll, QSpinnerDots,
    QFixedPosition, QBtn, QIcon, BackToTop } from 'quasar'

  export default {
    components: {
      QLayout,
      QInfiniteScroll,
      QSpinnerDots,
      QFixedPosition,
      QBtn,
      QIcon,
      Pokemon
    },
    directives: {
      BackToTop
    },
    data () {
      return {
        pokemons: [],
        nextUrl: null
      }
    },
    created () {
      this.getPokemons()
    },
    methods: {
      async getPokemons (url, done) {
        try {
          let response

          if (url) response = await axios(url)
          else response = await axios(getPokemonList())

          response.data.results.map(pokemon => {
            let baseInfo = {}

            let splittedURL = pokemon.url.split('/')
            baseInfo.number = splittedURL[splittedURL.length - 2]
            baseInfo.image = getPokemonAvatar(baseInfo.number)
            baseInfo.name = pokemon.name

            this.pokemons.splice(this.pokemons.length, 1, baseInfo)

            if (done) done()
          })

          this.nextUrl = response.data.next
        }
        catch (err) {
          console.log(err)
        }
      },
      loadMore (index, done) {
        if (this.pokemons.length > 0 && this.nextUrl) {
          let url = this.nextUrl
          this.nextUrl = null

          this.getPokemons(url, done)
        }
        else {
          done()
        }
      }
    }
  }
</script>

<style scoped>
  .list {
    margin: 0.5em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .gallery-item {
    width: 10em;
  }
</style>
