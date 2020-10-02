<template>
  <div>
    <nuxt-link to="/addcow">
      <button>add cow</button>
    </nuxt-link>

    <br />
    <section
      v-for="animal in this.$store.state.animals.animalsList"
      :key="animal.name"
    >
      <nuxt-link :to="`/${animal.name}`">{{ animal.name }}</nuxt-link>
    </section>

    <v-btn @click="gc">getcows</v-btn>
  </div>
</template>

<script>
export default {
  beforeMount() {},
  methods: {
    gc() {
      this.$store.dispatch('signOut')
    },
  },
}
</script>
