<template>
  <h3 v-if="animal.check1.isPassed != null">
    {{
      `Hey your ${animal.species} ${animal.name} has beein Inseminated on
    ${$dateFns.format(animal.inseminatedOn.toDate(), 'dd-MM-yyyy')} and
    waiting to see if she comes to heat on ${$dateFns.format(
      animal.check1.date.toDate(),
      'dd-MM-yyyy',
    )} if she hasn't comes to heat then insemination is sucessfull and you can mark check as passed. `
    }}
  </h3>
  <div v-else-if="animal.check2.isPassed != null">
    {{
      `Hey your ${animal.species} ${animal.name} has beein Inseminated on
    ${$dateFns.format(animal.inseminatedOn.toDate(), 'dd-MM-yyyy')} and
    you can check for pregnancy is ${$dateFns.format(
      animal.check2.date.toDate(),
      'dd-MM-yyyy',
    )} if she hasn't comes to heat then insemination is sucessfull and you can mark check as passed. `
    }}
  </div>
  <div v-else-if="animal.check3.isPassed != null">check3</div>
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
