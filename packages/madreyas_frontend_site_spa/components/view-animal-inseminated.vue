<template>
  <div v-if="animal.check1.isPassed != true">check1</div>
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
