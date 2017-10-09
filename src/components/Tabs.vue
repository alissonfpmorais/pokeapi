<template lang="html">
  <q-tabs slot="navigation">
    <q-route-tab v-for="tab in tabs" :to="tab.to" slot="title" :key="tab.name"
      :name="tab.name" :label="tab.label" @select="selectedTab(tab.name)" />
  </q-tabs>
</template>

<script>
  import { QTabs, QRouteTab } from 'quasar'

  export default {
    name: 'tabs',
    components: { QTabs, QRouteTab },
    data () {
      return {
        tabs: [
          { name: 'pokemons', label: 'Pokemons', to: '/pokemons' },
          { name: 'items', label: 'Items', to: '/items' }
        ]
      }
    },
    methods: {
      selectedTab (name) { this.$emit('select', name) }
    }
  }
</script>

<style lang="css" scoped>
</style>
