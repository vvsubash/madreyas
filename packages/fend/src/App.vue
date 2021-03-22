<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite need to add vue router" />
  <unit-length-converter/>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import UnitLengthConverter from './components/UnitLengthConverter.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    UnitLengthConverter
  }
})
</script>