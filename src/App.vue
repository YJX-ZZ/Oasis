<template>
  <div class="caintainer-md overflow-hidden">
    <top-header></top-header>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import TopHeader from './components/TopHeader.vue'

export default defineComponent({
  name: 'app',
  components: {
    TopHeader
  }
})
</script>

<style>
.oasisbg{
  background-image: url(./assets/oasis.png);
  background-repeat: no-repeat;
  background-size: 100% auto;

}
</style>
