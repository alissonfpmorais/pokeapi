<template lang="html">
  <q-tabs slot="navigation">
    <q-tab v-for="tab in tabs" slot="title" :key="tab.name"
      :name="tab.name" :label="tab.label" @select="selectedTab(tab.name)" />
  </q-tabs>
</template>

<script>
  import { QTabs, QTab } from 'quasar'

  export default {
    name: 'tabs',
    components: { QTabs, QTab },
    data () {
      return {
        tabs: [
          { name: 'pokemons', label: 'Pokemons' },
          { name: 'items', label: 'Items' }
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
