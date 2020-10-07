<template>
  <v-container>
    <v-form ref="form" data-app class="">
      <v-container>
        <h2 class="grey--text text--darken-4 font-weight-bold">Add New Cow</h2>
        <v-row>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="newCow"
              label="Name of the Animal"
              required
              :rules="nameRules"
            ></v-text-field>
            <v-select
              v-model="species"
              :items="['Cow', 'Buffalo']"
              label="Species"
              required
            ></v-select>
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
              :rules="dateRules"
              label="Date of recent calving"
            ></v-text-field>
            <v-text-field
              v-if="
                cowStateEntered === 'Inseminated' || cowStateEntered === 'Dry'
              "
              v-model="inseminatedOn"
              type="date"
              :rules="dateRules"
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
              :rules="dateRules"
            ></v-text-field>
            <v-btn outlined large @click="addAnimal">Add Animal</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>
<script>
import { db } from '~/plugins/firebase'
export default {
  layout: 'authenticated',
  data() {
    return {
      newCow: 'Name',
      species: null,
      possibleCowStates: ['Just Calved', 'Inseminated', 'Dry'],
      cowStateEntered: null,
      dateOfRecentCalving: null,
      inseminatedOn: null,
      semenId: null,
      driedOn: null,
      nameRules: [
        (v) =>
          !this.$store.state.animals.animalsList
            .map((x) => x.name)
            .includes(v) ||
          'Animal with this name already exists please change the name',
        (v) =>
          !['Name', 'Cow', 'cow', 'animal'].includes(v) ||
          'Please give your animal a unique name',
      ],
      dateRules: [
        (v) => new Date(v) <= new Date() || "You can't enter future date",
        (v) => !!v || "Date can't be empty",
      ],
    }
  },
  methods: {
    async addAnimal() {
      if (this.$refs.form.validate()) {
        class NewAnimal {
          constructor(
            name,
            species,
            cowStateEntered,
            dateOfRecentCalving,
            inseminatedOn,
            semenId,
            driedOn,
          ) {
            this.name = name
            this.species = species
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
        const kow = new NewAnimal(
          this.newCow,
          this.species,
          this.cowStateEntered,
          this.dateOfRecentCalving,
          this.inseminatedOn,
          this.semenId,
          this.driedOn,
        )

        await db
          .collection(`users/${this.$store.state.user.uid}/animals/`)
          .doc(this.newCow)
          .set(Object.assign({}, kow))
        db.collection(
          `users/${this.$store.state.user.uid}/animals/${this.newCow}/heatData`,
        )
          .add(Object.assign({}, kow))
          .then(this.$router.push({ path: 'app' }))
      }
    },
  },
}
</script>
