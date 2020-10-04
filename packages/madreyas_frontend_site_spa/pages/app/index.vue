<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="animal in this.$store.state.animals.animalsList"
        :key="animal.name"
        style="width: 1000px"
      >
        <animal-display-card :animal="animal" :show="show" />
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
  layout: 'authenticated',
  data() {
    return {
      show: false,
    }
  },
  beforeCreate() {
    this.$store.dispatch('animals/getAnimals')
  },
}
</script>
