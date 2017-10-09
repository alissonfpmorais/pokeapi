<template lang="html">
  <div>
    <search :label="cardType" @lookingFor="value => typedName = value" />
    <list :searchFor="typedName" :label="cardType" />
  </div>
</template>

<script>
  import List from './shared/List.vue'
  import Search from './Search.vue'

  export default {
    components: {
      List,
      Search
    },
    data () {
      return {
        cardType: 'items',
        typedName: ''
      }
    }
  }
</script>

<style lang="css">
</style>
