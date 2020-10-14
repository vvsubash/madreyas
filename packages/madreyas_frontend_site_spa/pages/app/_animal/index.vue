<template>
  <v-main>
    <h1>
      <nuxt-link :to="`/app/${animal.name}/edit`">{{ animal.name }}</nuxt-link>
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
import { db, auth } from '~/plugins/firebase'
export default {
  layout: 'authenticated',
  data() {
    return {
      animal: {},
    }
  },
  firestore() {
    const name = this.$route.params.animal
    return {
      animal: db.collection(`users/${auth.currentUser.uid}/animals`).doc(name),
    }
  },
}
</script>
