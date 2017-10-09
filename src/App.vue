<template lang="html">
  <div id="q-app">
    <q-layout>
      <div class="default-margin">
        <tabs />
        <router-view />
      </div>
    </q-layout>
  </div>
</template>

<script>
  import { QLayout } from 'quasar'
  import Tabs from './components/Tabs.vue'
  import Search from './components/Search.vue'

  export default {
    components: {
      QLayout,
      Tabs,
      Search
    }
  }
</script>

<style lang="css">
  .default-margin {
    margin: 1.5em;
  }
</style>
