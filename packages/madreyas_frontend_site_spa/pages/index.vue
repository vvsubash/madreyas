<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="animal in this.$store.state.animals.animalsList"
        :key="animal.name"
        style="width: 1000px"
      >
        <v-card outlined max-width="400" class="mx-auto">
          <v-img
            src="https://picsum.photos/200/200"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
          </v-img>
          <v-card-title v-text="animal.name"> </v-card-title>
          <v-card-subtitle>State: {{ animal.state }} </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  beforeMount() {},
}
</script>
