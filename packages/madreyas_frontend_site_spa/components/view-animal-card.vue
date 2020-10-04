<template>
  <div>
    <v-list v-if="animal.state == 'justCalved'" class="transparent">
      <view-animal-card-list
        title="Date Of Recent Calving"
        :sub-title="animal.dateOfRecentCalving.toDate()"
      />
      <view-animal-card-list
        title="She Can Be Inseminated On"
        :sub-title="animal.whenCanSheBeInseminated.toDate()"
      />
    </v-list>
    <v-list v-else-if="animal.state == 'dried'" class="transparent">
      <view-animal-card-list
        title="Check For Edema"
        :sub-title="animal.dateToCheckForEdema.toDate()"
      />
      <view-animal-card-list
        title="Expected Calving on"
        :sub-title="animal.expectedDateOfCalving.toDate()"
      />
    </v-list>
    <v-list v-else-if="animal.state == 'inseminated'" class="transparent">
      <view-animal-card-list
        title="Inseminated On"
        :sub-title="animal.inseminatedOn.toDate()"
      />
      <view-animal-card-list
        v-if="animal.check1.isPassed == false"
        title="Date Of Next Checking"
        :sub-title="animal.check1.date.toDate()"
      />
      <view-animal-card-list
        v-else-if="animal.check2.isPassed == false"
        title="Date Of Next Checking"
        :sub-title="animal.check2.date.toDate()"
      />
      <view-animal-card-list
        v-else
        title="Should Be Dried On"
        :sub-title="animal.check3.date.toDate()"
      />
    </v-list>
  </div>
</template>
<script>
export default {
  props: {
    animal: {
      type: Object,
      default: null,
    },
  },
}
</script>
