<template>
  <div>
    <v-list v-if="animal.state == 'justCalved'" class="transparent">
      <view-animal-card-list
        title="Date Of Recent Calving"
        :sub-title="undef(animal.dateOfRecentCalving)"
      />
      <view-animal-card-list
        title="She Can Be Inseminated On"
        :sub-title="undef(animal.whenCanSheBeInseminated)"
      />
    </v-list>
    <v-list v-else-if="animal.state == 'dried'" class="transparent">
      <view-animal-card-list
        title="Check For Edema"
        :sub-title="undef(animal.dateToCheckForEdema)"
      />
      <view-animal-card-list
        title="Expected Calving on"
        :sub-title="undef(animal.expectedDateOfCalving)"
      />
    </v-list>
    <v-list v-else-if="animal.state == 'inseminated'" class="transparent">
      <view-animal-card-list
        title="Inseminated On"
        :sub-title="undef(animal.inseminatedOn)"
      />
      <view-animal-card-list
        v-if="animal.check1.isPassed == false"
        title="Date Of Next Checking"
        :sub-title="undef(animal.check1.date)"
      />
      <view-animal-card-list
        v-else-if="animal.check2.isPassed == false"
        title="Date Of Next Checking"
        :sub-title="undef(animal.check2.date)"
      />
      <view-animal-card-list
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
