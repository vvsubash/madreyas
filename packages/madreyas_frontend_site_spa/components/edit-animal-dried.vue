<template>
  <v-container bg fill-height grid-list-md text-xs-center>
    <v-layout row wrap align-center>
      <v-flex>
        <v-card outlined max-width="400" class="mx-auto">
          <v-card-title nuxt v-text="animal.name"> </v-card-title>
          <v-list class="transparent">
            <view-animal-card-list
              title="Check For Edema on"
              :sub-title="animal.dateToCheckForEdema.toDate()"
            />
            <view-animal-card-list
              title="Expected Calving on"
              :sub-title="animal.expectedDateOfCalving.toDate()"
            />
          </v-list>
          <v-divider></v-divider>
          <v-container grid-list-xs>
            <v-checkbox
              v-model="sheCalved"
              label="She Calved"
              max-width="400px"
              class="mx-auto"
            ></v-checkbox>
            <v-form v-if="sheCalved === true" ref="form" data-app class="">
              <v-container grid-list-xs>
                <v-text-field
                  v-model="dateOfRecentCalving"
                  :ripple="true"
                  :rules="dateRules"
                  type="date"
                  label="Date of recent calving"
                ></v-text-field>
                <v-btn outlined large @click="updateAnimal">Update Cow</v-btn>
              </v-container>
            </v-form>
          </v-container>
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
    return {
      sheCalved: false,
      dateOfRecentCalving: null,
      dateRules: [
        (v) => new Date(v) <= new Date() || "You can't enter future date",
        (v) => !!v || "Date can't be empty",
      ],
    }
  },
  methods: {
    updateAnimal() {
      if (this.$refs.form.validate()) {
        const uid = this.$store.state.user.uid
        const name = this.$route.params.animal
        db.collection(`users/${uid}/animals`)
          .doc(name)
          .set({
            name: this.animal.name,
            species: this.animal.species,
            state: 'justCalved',
            dateOfRecentCalving: new Date(this.dateOfRecentCalving),
          })
          .then(this.$router.push({ path: 'app' }))
      }
    },
  },
}
</script>
