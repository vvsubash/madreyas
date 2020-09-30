<template>
  <v-container>
    <v-form data-app class="">
      <v-container>
        <h2 class="grey--text text--darken-4 font-weight-bold">Add New Cow</h2>
        <v-row>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="newCow"
              label="Name of the Animal"
              required
            ></v-text-field>
            <v-select
              v-model="cowStateEntered"
              :items="possibleCowStates"
              label="State Of Cow"
              required
            ></v-select>
            <v-text-field
              v-if="cowStateEntered === 'Just Calved'"
              v-model="dateOfRecentCalving"
              type="date"
              label="Date of recent calving"
            ></v-text-field>
            <v-text-field
              v-if="
                cowStateEntered === 'Inseminated' || cowStateEntered === 'Dry'
              "
              v-model="inseminatedOn"
              type="date"
              label="Date of insemination"
            ></v-text-field>
            <v-text-field
              v-if="cowStateEntered === 'Inseminated'"
              v-model="semenId"
              type="text"
              label="Semen Id"
            ></v-text-field>
            <v-text-field
              v-if="cowStateEntered === 'Dry'"
              v-model="driedOn"
              type="date"
              label="Dried on"
            ></v-text-field>
            <v-btn outlined large @click="addCow">Add Cow</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>
<script>
import db from '~/plugins/firestore'
export default {
  data() {
    return {
      newCow: 'Name',
      possibleCowStates: ['Just Calved', 'Inseminated', 'Dry'],
      cowStateEntered: null,
      dateOfRecentCalving: null,
      inseminatedOn: null,
      semenId: null,
      driedOn: null,
    }
  },
  methods: {
    async addCow() {
      class NewCow {
        constructor(
          cowStateEntered,
          dateOfRecentCalving,
          inseminatedOn,
          semenId,
          driedOn,
        ) {
          if (cowStateEntered === 'Just Calved') {
            this.state = 'justCalved'
            this.dateOfRecentCalving = new Date(dateOfRecentCalving)
          }
          if (cowStateEntered === 'Inseminated') {
            this.state = 'inseminated'
            this.inseminatedOn = new Date(inseminatedOn)
            this.semenId = semenId
          }
          if (cowStateEntered === 'Dry') {
            this.state = 'dried'
            this.inseminatedOn = new Date(inseminatedOn)
            this.driedOn = new Date(driedOn)
          }
        }
      }
      const kow = new NewCow(
        this.cowStateEntered,
        this.dateOfRecentCalving,
        this.inseminatedOn,
        this.semenId,
        this.driedOn,
      )

      await db
        .collection(`users/${this.$store.state.user.uid}/animals/`)
        .doc(this.newCow)
        .set({
          name: this.newCow,
          species: 'cow',
        })
      db.collection(
        `users/${this.$store.state.user.uid}/animals/${this.newCow}/heatData`,
      )
        .add(Object.assign({}, kow))
        .then(this.$router.push(`/`))
    },
  },
}
</script>
