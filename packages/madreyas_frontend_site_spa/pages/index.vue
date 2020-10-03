<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="animal in this.$store.state.animals.animalsList"
        :key="animal.name"
        style="width: 1000px"
      >
        <v-card outlined max-width="400" class="mx-auto">
          <v-img
            src="https://picsum.photos/400/300"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
          </v-img>
          <v-card-title
            @click="$router.push(`/${animal.name}`)"
            v-text="animal.name"
          >
          </v-card-title>
          <v-card-subtitle>State: {{ animal.state }} </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-btn
      fab
      color="orange accent-2"
      bottom
      right
      fixed
      @click="$router.push('/addcow')"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
export default {
  beforeCreate() {
    this.$store.dispatch('animals/getAnimals')
  },
}
</script>
