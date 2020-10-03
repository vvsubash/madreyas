<template>
  <div v-if="this.$store.state.user === null">
    <h1>Please Refresh to Login</h1>
  </div>
  <v-app v-else>
    <v-app-bar color="orange" max-height="100">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" bottom temporary dense>
      <v-list nav>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>
              <nuxt-link to="/addcow">
                <v-btn block elevation="2">add cow</v-btn>
              </nuxt-link></v-list-item-title
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <v-btn block elevation="2" @click="logOut">logOut</v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
    }
  },

  watch: {
    group() {
      this.drawer = false
    },
  },
  beforeMount() {
    if (this.$store.state.user === null) {
      this.$store.dispatch('signIn')
    }
    this.$store.dispatch('animals/getAnimals')
  },
  methods: {
    logOut() {
      this.$store.dispatch('signOut')
    },
  },
}
</script>
