<template>
  <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container">
    <span class="navbar-brand mb-0 h1">Oasis</span>
      <ul>
       <drop-down :title="`About Oasis`">
        <dropdown-item><a href="https://twitter.com/oasis" class="dropdown-item">Twitter</a></dropdown-item>
        <dropdown-item><a href="https://music.youtube.com/channel/UCmMUZbaYdNH0bEd1PAlAqsA" class="dropdown-item">YT Music</a></dropdown-item>
      </drop-down>
    </ul>
  </div>
</nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DropDown from './DropDown.vue'
import DropdownItem from './DropDownItem.vue'

export default defineComponent({
  name: 'Header',
  components: {
    DropDown,
    DropdownItem
  }
})
</script>

<style>

</style>
