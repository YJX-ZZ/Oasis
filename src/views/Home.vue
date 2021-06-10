<template>
  <detail-card :list="list"></detail-card>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import DetailCard from '../components/DetailCard.vue'
import { testdata } from '../data'

export default defineComponent({
  name: 'Home',
  components: {
    DetailCard
  },
  setup () {
    return {
      list: testdata
    }
  }
})
</script>

<style>

</style>
