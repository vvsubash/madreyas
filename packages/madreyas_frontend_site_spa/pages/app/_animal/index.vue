<template>
  <v-main>
    <h1>
      <nuxt-link :to="`${animal.name}/edit`">{{ animal.name }}</nuxt-link>
    </h1>
    <section>
      <section v-if="animal.state == 'justCalved'">
        <edit-animal-just-calved :animal="animal" />
      </section>

      <section v-else-if="animal.state === 'inseminated'">
        <view-animal-inseminated :animal="animal" />
      </section>

      <section v-else-if="animal.state == 'dried'">
        <edit-animal-dried :animal="animal" />
      </section>

      <section v-else>
        <h2>There is some problem please contact support</h2>
      </section>
    </section>
  </v-main>
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
