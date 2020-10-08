<template>
  <v-container bg fill-height grid-list-md text-xs-center>
    <h3>we are still building this features.</h3>
    <v-layout row wrap align-center>
      <v-flex>
        <v-card outlined max-width="400" class="mx-auto">
          <v-card-title nuxt v-text="animal.name"> </v-card-title>
          <v-form
            v-if="animal.check1.isPassed === null"
            ref="form"
            data-app
            class=""
          >
            <v-container grid-list-xs>
              <v-row align="center" class="mx-auto">
                <v-select
                  v-model="checkOnePassed"
                  class="mx-4"
                  :rules="selectRules"
                  :items="['passed', 'failed']"
                  label="Did She Pass Check One"
                  required
                ></v-select>
              </v-row>
              <v-divider />

              <v-btn class="my-4 mx-4" outlined large @click="updateAnimal"
                >Update Cow</v-btn
              >
            </v-container>
          </v-form>
          <v-form
            v-else-if="animal.check2.isPassed === null"
            ref="form"
            data-app
            class=""
          >
            <v-container grid-list-xs>
              <v-row align="center" class="mx-auto">
                <v-select
                  v-model="checkTwoPassed"
                  class="mx-4"
                  :rules="selectRules"
                  :items="['passed', 'failed']"
                  label="Did She Pass Check Two"
                  required
                ></v-select>
              </v-row>
              <v-divider />

              <v-btn class="my-4 mx-4" outlined large @click="updateAnimal"
                >Update Cow</v-btn
              >
            </v-container>
          </v-form>
          <v-form
            v-else-if="animal.check3.isPassed === null"
            ref="form"
            data-app
            class=""
          >
            <v-container grid-list-xs>
              <v-row align="center" class="mx-auto">
                <v-select
                  v-model="checkThreePassed"
                  class="mx-4"
                  :rules="selectRules"
                  :items="['passed', 'failed']"
                  label="Did She Pass Check Three"
                  required
                ></v-select>
              </v-row>
              <v-divider />

              <v-btn class="my-4 mx-4" outlined large @click="updateAnimal"
                >Update Cow</v-btn
              >
            </v-container>
          </v-form>
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
      checkOnePassed: null,
      checkTwoPassed: null,
      checkThreePassed: null,
      selectRules: [(v) => v != null || "This can't be empty"],
    }
  },
  methods: {
    updateAnimal() {
      const uid = this.$store.state.user.uid
      const name = this.$route.params.animal
      if (this.$refs.form.validate()) {
        if (this.animal.check1.isPassed === null) {
          db.collection(`users/${uid}/animals`)
            .doc(name)
            .set(
              {
                check1: {
                  isPassed: this.checkOnePassed === 'passed',
                },
              },
              { merge: true },
            )
        } else if (this.animal.check2.isPassed === null) {
          db.collection(`users/${uid}/animals`)
            .doc(name)
            .set(
              {
                check2: { isPassed: this.checkTwoPassed === 'passed' },
              },
              { merge: true },
            )
        } else {
          db.collection(`users/${uid}/animals`)
            .doc(name)
            .set(
              {
                check3: { isPassed: this.checkThreePassed === 'passed' },
              },
              { merge: true },
            )
        }
      }
    },
  },
}
</script>
