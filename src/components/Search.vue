<template lang="html">
  <q-search :value="search" @input="value => { lookingFor(value) }"
    :debounce="debounce" :float-label="searchLabel" autofocus>
  </q-search>
</template>

<script>
  import { QSearch } from 'quasar'
  import { capitalizeFirstLetter } from '../js/visual/index'

  export default {
    name: 'search',
    components: {
      QSearch
    },
    props: {
      label: {
        required: true,
        type: String
      }
    },
    data () {
      return {
        search: '',
        debounce: 200
      }
    },
    computed: {
      searchLabel () { return `Search for ${capitalizeFirstLetter(this.label)}` }
    },
    methods: {
      lookingFor (typedName) {
        this.search = typedName
        this.$emit('lookingFor', typedName)
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
