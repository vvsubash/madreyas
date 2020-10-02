<template>
  <div v-if="this.$store.state.user === null">
    <h1>Please Refresh to Login</h1>
  </div>
  <div v-else>
    <nuxt />
  </div>
</template>

<script>
export default {
  beforeMount() {
    if (this.$store.state.user === null) {
      this.$store.dispatch('signIn')
    }
    this.$store.dispatch('animals/getAnimals')
  },
}
</script>
