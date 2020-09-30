<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  beforeMount() {
    if (this.$store.state.user === null) {
      this.$store.dispatch('signIn')
    }
  },
}
</script>
