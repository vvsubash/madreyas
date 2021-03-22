<template>
  <div>
    <h1>
      {{
        `Hey your ${animal.species} calved on ${$dateFns.format(
          animal.dateOfRecentCalving.toDate(),
          'dd-MM-yyyy',
        )} You can click above on her name to edit further details.`
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
