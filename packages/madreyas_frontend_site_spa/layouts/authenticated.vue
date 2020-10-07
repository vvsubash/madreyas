<template>
  <div v-if="this.$store.state.user === null" id="app">
    <v-app>
      <v-container bg fill-height grid-list-md text-xs-center>
        <v-layout row wrap align-center>
          <v-flex>
            <v-card class="mx-auto my-12" max-width="374">
              <!-- <v-img
                height="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img> -->

              <v-card-title>Madreyas App</v-card-title>

              <v-card-text>
                <div>
                  Please Login to manage heat cycles and pregnancy schedule of
                  your dairy
                </div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-actions>
                <v-btn color="deep-orange" text @click="logIn">
                  Please wait while we log you in
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
  <v-app v-else class="mx-auto overflow-hidden">
    <v-app-bar color="orange" max-height="70">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed bottom temporary dense>
      <v-list nav>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>
              <nuxt-link :to="`/app/addanimal`">
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
    if (this.$store.state.user == null) {
      this.$store.dispatch('signIn')
    }
  },

  methods: {
    logOut() {
      this.$store.dispatch('signOut')
    },
  },
}
</script>
