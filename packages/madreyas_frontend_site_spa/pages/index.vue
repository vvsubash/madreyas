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
      <nuxt-link :to="`/${animal.name}`">
        <v-card max-width="400" class="mx-auto">
          <v-card-title>
            {{ animal.name }}
          </v-card-title>
          <v-list-item-subtitle>{{ animal.state }}</v-list-item-subtitle>
        </v-card>
        <br />
      </nuxt-link>
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
