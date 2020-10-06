<template>
  <v-container bg fill-height grid-list-md text-xs-center>
    <v-layout row wrap align-center>
      <v-flex>
        <v-card outlined max-width="400" class="mx-auto">
          <v-card-title nuxt v-text="animal.name"> </v-card-title>
          <v-card-subtitle> 1. </v-card-subtitle>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { db } from '~/plugins/firebase'

export default {
  props: {
    animal: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {}
  },
  methods: {
    updateanimal() {
      const uid = this.$store.state.user.uid
      const name = this.$route.params.animal
      db.collection(`users/${uid}/animals`)
        .doc(name)
        .set(
          {
            // dateOfObservedHeat: firebase.firestore.FieldValue.arrayUnion(
            //   new Date(this.dateOfObservedHeat),
            dorh: new Date(this.dateOfObservedHeat),
          },
          { merge: true },
        )
    },
  },
}
</script>
