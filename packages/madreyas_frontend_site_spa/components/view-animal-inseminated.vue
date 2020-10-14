<template>
  <div v-if="animal.check1.isPassed != true">
    {{
      `Hey your ${animal.species} ${
        animal.name
      } has  beein Inseminated on ${$dateFns.format(
        animal.inseminatedOn.toDate(),
        'dd-MM-yyyy',
      )} and waiting to see if she comes to heat on ${$dateFns.format(
        animal.check1.date.toDate(),
        'dd-MM-yyyy',
      )} `
    }}
  </div>
  <div v-else-if="animal.check2.isPassed != true">check2</div>
  <div v-else-if="animal.check3.isPassed != true">check3</div>
</template>
<script>
export default {
  props: {
    animal: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>
