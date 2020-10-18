<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field
      label="Phone Number"
      v-model="pnNumber"
      :rules="pnNumberRules"
      :counter="10"
      required
    ></v-text-field>

    <v-btn @click="submit" :disabled="!valid"> submit </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    pnNumber: '',
    pnNumberRules: [
      (v) => !!v || 'Phone Number is required',
      (v) =>
        (v && v.length <= 10) || 'Phone Number must be less than 10 characters',
    ],
  }),

  methods: {
    submit() {},
    clear() {
      this.$refs.form.reset()
    },
  },
}
</script>
