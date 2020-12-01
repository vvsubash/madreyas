<template>
  <div>
    <v-list-item>
      <v-list-item-title>{{ title }}</v-list-item-title>

      <v-list-item-subtitle class="text-right">
        {{ subTitle }}
      </v-list-item-subtitle>
    </v-list-item>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Name',
    },
    subTitle: {
      type: [Date, String],
      default: null,
    },
  },
}
</script>
