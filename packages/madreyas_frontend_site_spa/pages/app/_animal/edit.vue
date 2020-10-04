<template>
  <main v-if="animal.name != null">
    <h1>{{ animal.name }}</h1>
    <section v-if="animal.state == 'justCalved'">
      <edit-animal-just-calved :animal="animal" />
    </section>

    <section v-else-if="animal.state === 'inseminated'">
      <edit-animal-inseminated :animal="animal" />
    </section>

    <section v-else-if="animal.state == 'dried'">
      <edit-animal-dried />
    </section>

    <section v-else>
      <h2>There is some problem please contact support</h2>
    </section>
  </main>
</template>

<script>
export default {
  layout: 'authenticated',
  computed: {
    animal() {
      return this.$store.getters['animals/getTheAnimal'](
        this.$route.params.animal,
      )
    },
  },
}
</script>
