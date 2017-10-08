<template lang="html">
  <q-layout>
    <div class="default-margin">
      <!-- <tabs @select="value => label = value"/> -->
      <search :label="label" @lookingFor="value => { typedName = value }" />
      <list :searchFor="typedName" :load="cardsData" :cardType="label"/>
      <!-- <list :searchFor="typedName" :load="cardsData" :cardType="label" @loadMore="value => "/> -->
    </div>
  </q-layout>
</template>

<script>
  import { QLayout } from 'quasar'
  import Tabs from './Tabs.vue'
  import Search from './Search.vue'
  import List from './List.vue'
  import { getCards } from '../js/fetch/index'

  export default {
    components: {
      QLayout,
      Tabs,
      Search,
      List
    },
    data () {
      return {
        label: 'items',
        typedName: ''
      }
    },
    computed: {
      // Get cards info
      cardsData () {
        console.log(this.label)
        return getCards(this.label)
      }
    }
    // methods: {
    //   async loadMore (index, done) {
    //     let list = this.$refs.list
    //
    //     if (this.cards.length === 0 || this.nextUrl) {
    //       let result = await this.load(this.nextUrl)
    //       this.nextUrl = result.nextUrl
    //       this.cards = this.cards.concat(result.cards)
    //
    //       done()
    //       list.loadMore()
    //     }
    //     else {
    //       done()
    //       list.stop()
    //     }
    //   }
    // }
  }
</script>

<style lang="css">
  .default-margin {
    margin: 1.5em;
  }
</style>
