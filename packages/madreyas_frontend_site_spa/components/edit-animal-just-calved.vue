<template>
  <div>
    <!-- <h4>
      {{
        `She calved on ${animal.dateOfRecentCalving} and can be inseminated on need to fix on logic`
      }}
    </h4> -->
    <v-form data-app>
      <v-container>
        <v-row>
          <v-col cols="12" sm="4">
            <v-select
              v-model="eventToBeRecorded"
              :items="eventsThatCanBeRecorded"
              label="Event to be recorded"
              required
            ></v-select>
            <v-text-field
              v-show="eventToBeRecorded == 'recordHeat'"
              v-model="dateOfObservedHeat"
              type="date"
              label="Date of observed heat"
            ></v-text-field>
            <v-text-field
              v-show="eventToBeRecorded == 'inseminated'"
              v-model="dateOfInsemination"
              type="date"
              label="Date of Insemination"
            ></v-text-field>
            <v-text-field
              v-show="eventToBeRecorded == 'inseminated'"
              v-model="semenIdNumber"
              label="Semen Id Number"
            ></v-text-field>
            <v-btn outlined large @click="updateanimal">Update animal</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
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
      eventToBeRecorded: 'recordHeat',
      eventsThatCanBeRecorded: ['recordHeat', 'inseminated'],
      dateOfObservedHeat: null,
      dateOfInsemination: null,
      semenIdNumber: null,
    }
  },
  methods: {
    updateanimal() {
      const uid = this.$store.state.user.uid
      const name = this.$route.params.animal
      this.eventToBeRecorded === 'recordHeat'
        ? db
            .collection(`users/${uid}/animals`)
            .doc(name)
            .set(
              {
                // dateOfObservedHeat: firebase.firestore.FieldValue.arrayUnion(
                //   new Date(this.dateOfObservedHeat),
                dorh: new Date(this.dateOfObservedHeat),
              },
              { merge: true },
            )
        : db.collection(`users/${uid}/animals/${name}/heatData`).add({
            dateOfRecentCalving: this.animal.dateOfRecentCalving,
            state: 'inseminated',
            inseminatedOn: new Date(this.dateOfInsemination),
            semenId: this.semenIdNumber,
          })
    },
  },
}
</script>
