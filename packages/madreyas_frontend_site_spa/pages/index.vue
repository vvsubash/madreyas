<template>
  <div id="app">
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
                  Login / SignUp using Google
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  methods: {
    logIn() {
      this.$store.state.user == null
        ? this.$store.dispatch('signIn').then(this.$router.push('/app'))
        : this.$router.push('/app')
    },
  },
}
</script>
