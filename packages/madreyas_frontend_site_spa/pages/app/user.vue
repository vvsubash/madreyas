<template>
  <v-container>
    <v-form ref="form" data-app class="">
      <v-container>
        <h2 class="grey--text text--darken-4 font-weight-bold">User Details</h2>
        <v-row>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="name"
              label="User Name"
              disabled
            ></v-text-field>
            <v-text-field
              v-model="email"
              label="Email"
              required
              disabled
            ></v-text-field>
            <v-text-field
              v-model="phoneNumber"
              label="Phone Number"
              required
              disabled
            ></v-text-field>
            <v-btn outlined large @click="addAnimal">Add Animal</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>
<script>
export default {
  layout: 'authenticated',
  data() {
    return {
      name: 'vvsubash',
      email: 'subash.venkat007@gmail.com',
      phoneNumber: '9491234040',
    }
  },
}
</script>
