<template>
  <main>
    <h1>
      <nuxt-link :to="`/${animal.name}/edit`">{{ animal.name }}</nuxt-link>
    </h1>
    <section>
      <h3>{{ animal.state }}</h3>
    </section>
  </main>
</template>

<script>
export default {
  computed: {
    animal() {
      return this.$store.state.animals.animalsList.find((x) => {
        return x.name === this.$route.params.animal
      })
    },
  },
}
</script>
