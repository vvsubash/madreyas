<template>
  <div>
    <v-list v-if="animal.state == 'justCalved'" class="transparent">
      <animal-display-card-details-list
        title="Date Of Recent Calving"
        :sub-title="undef(animal.dateOfRecentCalving)"
      />
      <animal-display-card-details-list
        title="She Can Be Inseminated On"
        :sub-title="undef(animal.whenCanSheBeInseminated)"
      />
    </v-list>
    <v-list v-else-if="animal.state == 'dried'" class="transparent">
      <animal-display-card-details-list
        title="Check For Edema"
        :sub-title="undef(animal.dateToCheckForEdema)"
      />
      <animal-display-card-details-list
        title="Expected Calving on"
        :sub-title="undef(animal.expectedDateOfCalving)"
      />
    </v-list>
    <v-list v-else-if="animal.state == 'inseminated'" class="transparent">
      <animal-display-card-details-list
        title="Inseminated On"
        :sub-title="undef(animal.inseminatedOn)"
      />
      <animal-display-card-details-list
        v-if="animal.check1.isPassed == false"
        title="Date Of 1st Checking"
        :sub-title="undef(animal.check1.date)"
      />
      <animal-display-card-details-list
        v-else-if="animal.check2.isPassed == false"
        title="Date Of 2nd Checking"
        :sub-title="undef(animal.check2.date)"
      />
      <animal-display-card-details-list
        v-else
        title="Should Be Dried On"
        :sub-title="undef(animal.check3.date)"
      />
    </v-list>
  </div>
</template>
<script>
import format from 'date-fns/format'
export default {
  props: {
    animal: {
      type: Object,
      default: null,
    },
  },
  methods: {
    undef(x) {
      return x === undefined
        ? 'something went wrong please contact Admin'
        : format(x.toDate(), 'do-MMM-yyy')
    },
  },
}
</script>
