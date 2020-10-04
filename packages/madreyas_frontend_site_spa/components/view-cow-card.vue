<template>
  <div>
    <v-list v-if="animal.state == 'justCalved'" class="transparent">
      <v-list-item>
        <v-list-item-title>Calved On</v-list-item-title>

        <v-list-item-subtitle class="text-right">
          {{ animal.dateOfRecentCalving.toDate() || null }}
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn text> Full Report </v-btn>
    </v-card-actions>
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
