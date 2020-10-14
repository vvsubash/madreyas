<template>
  <v-card outlined max-width="400" class="mx-auto">
    <v-img
      src="https://picsum.photos/id/460/400/300"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
    >
    </v-img>
    <v-card-title @click="$router.push({ path: `/app/${animal.name}/edit` })">
      {{ `${animal.species === 'Cow' ? '🐄 ' : '🐃 '} ${animal.name}` }}
    </v-card-title>
    <v-card-subtitle>State: {{ animal.state }} </v-card-subtitle>
    <v-card-actions>
      <v-btn color="orange lighten-2" text @click="show = !show">
        More Details
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <view-animal-card :animal="animal" />
        <v-divider></v-divider>

        <v-card-actions>
          <v-btn text> Full Report </v-btn>
        </v-card-actions>
      </div>
    </v-expand-transition>
  </v-card>
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
  data() {
    return {
      show: false,
    }
  },
}
</script>
