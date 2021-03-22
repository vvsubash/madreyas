<template>
  <div>
    <h1>
      {{
        `Hey your ${animal.species} ${animal.name} has beein Inseminated on
    ${$dateFns.format(animal.inseminatedOn.toDate(), 'dd-MM-yyyy')} and
    Hey your ${animal.species} ${animal.name} has beein Dried on
    ${$dateFns.format(
      animal.driedOn.toDate(),
      'dd-MM-yyyy',
    )}.  check for edema on  ${$dateFns.format(
          animal.dateToCheckForEdema.toDate(),
          'dd-MM-yyyy',
        )} and she may calve on ${$dateFns.format(
          animal.expectedDateOfCalving.toDate(),
          'dd-MM-yyyy',
        )}`
      }}
    </h1>
  </div>
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
