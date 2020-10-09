<template>
  <v-container>
    <v-form ref="form" data-app class="">
      <v-container>
        <h2 class="grey--text text--darken-4 font-weight-bold">
          Add New Animal
        </h2>
        <v-row>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="newAnimal"
              label="Name of the Animal"
              required
              :rules="nameRules"
            ></v-text-field>
            <v-select
              v-model="species"
              :items="['Cow', 'Buffalo']"
              label="Species"
              :rules="selectRules"
              required
            ></v-select>
            <v-select
              v-model="animalStateEntered"
              :items="possibleAnimalStates"
              label="State Of Animal"
              required
              :rules="selectRules"
            ></v-select>
            <v-text-field
              v-if="animalStateEntered === 'Just Calved'"
              v-model="dateOfRecentCalving"
              type="date"
              :rules="dateRules"
              label="Date of recent calving"
            ></v-text-field>
            <v-text-field
              v-if="
                animalStateEntered === 'Inseminated' ||
                animalStateEntered === 'Dry'
              "
              v-model="inseminatedOn"
              type="date"
              :rules="dateRules"
              label="Date of insemination"
            ></v-text-field>
            <v-text-field
              v-if="animalStateEntered === 'Inseminated'"
              v-model="semenId"
              type="text"
              label="Semen Id"
            ></v-text-field>
            <v-text-field
              v-if="animalStateEntered === 'Dry'"
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
import { addDays } from 'date-fns'
import { db } from '~/plugins/firebase'

export default {
  layout: 'authenticated',
  data() {
    return {
      newAnimal: 'Name',
      species: null,
      possibleAnimalStates: ['Just Calved', 'Inseminated', 'Dry'],
      animalStateEntered: null,
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
      selectRules: [(v) => v !== null],
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
            animalStateEntered,
            dateOfRecentCalving,
            inseminatedOn,
            semenId,
            driedOn,
          ) {
            this.name = name
            this.species = species
            if (animalStateEntered === 'Just Calved') {
              this.state = 'justCalved'
              this.dateOfRecentCalving = new Date(dateOfRecentCalving)
              this.whenCanSheBeInseminated = new Date(
                addDays(new Date(dateOfRecentCalving), 77),
              )
            }
            if (animalStateEntered === 'Inseminated') {
              this.state = 'inseminated'
              this.inseminatedOn = new Date(inseminatedOn)
              this.semenId = semenId
              this.check1 = {
                date: new Date(addDays(new Date(inseminatedOn), 18)),
                isPassed: null,
              }
              this.check2 = {
                date: new Date(addDays(new Date(inseminatedOn), 90)),
                isPassed: null,
              }
              this.check3 = {
                date: new Date(addDays(new Date(inseminatedOn), 180)),
                isPassed: null,
              }
            }
            if (animalStateEntered === 'Dry') {
              this.state = 'dried'
              this.inseminatedOn = new Date(inseminatedOn)
              this.driedOn = new Date(driedOn)
            }
          }
        }
        const kow = new NewAnimal(
          this.newAnimal,
          this.species,
          this.animalStateEntered,
          this.dateOfRecentCalving,
          this.inseminatedOn,
          this.semenId,
          this.driedOn,
        )

        await db
          .collection(`users/${this.$store.state.user.uid}/animals/`)
          .doc(this.newAnimal)
          .set(Object.assign({}, kow))
          .then(this.$router.push({ path: '/app' }))
      }
    },
  },
}
</script>
