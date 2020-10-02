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
      return this.$store.getters['animals/getTheAnimal'](
        this.$route.params.animal,
      )
    },
  },
}
</script>
