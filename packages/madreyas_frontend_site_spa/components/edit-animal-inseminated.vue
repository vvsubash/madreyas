<template>
  <v-container bg fill-height grid-list-md text-xs-center>
    <v-layout row wrap align-center>
      <v-flex>
        <v-card outlined max-width="400" class="mx-auto">
          <v-card-title nuxt v-text="animal.name"> </v-card-title>
          <v-form
            v-if="animal.check1.isPassed == false"
            ref="form"
            data-app
            class=""
          >
            <v-container grid-list-xs>
              <v-row align="center" class="mx-auto">
                <v-select
                  v-model="checkOnePassed"
                  class="mx-4"
                  :items="p"
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
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
// import { db } from '~/plugins/firebase'

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
      p: ['Passed', 'Failed'],
    }
  },
  methods: {
    updateAnimal() {
      alert(this.checkOnePassed)
    },
  },
}
</script>
