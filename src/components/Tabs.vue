<template lang="html">
  <q-tabs slot="navigation">
    <!-- <q-route-tab v-for="tab in tabs" :to="tab.to" slot="title" :key="tab.name"
      :name="tab.name" :label="tab.label" @select="selectedTab(tab.name)" /> -->
      <q-route-tab :to="tabs[0].to" slot="title" :key="tabs[0].name"
        :name="tabs[0].name" :label="tabs[0].label" @select="selectedTab(tabs[0].name)" />
      <q-route-tab :to="tabs[1].to" slot="title" :key="tabs[1].name"
        :name="tabs[1].name" :label="tabs[1].label" @select="selectedTab(tabs[1].name)" />
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
