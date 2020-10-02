<template>
  <div>
    <nuxt-link to="/addcow">
      <button>add cow</button>
    </nuxt-link>

    <v-btn @click="gc">getcows</v-btn>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('cows/getCows')
  },
  methods: {
    gc() {
      this.$store.dispatch('signOut')
    },
  },
}
</script>
