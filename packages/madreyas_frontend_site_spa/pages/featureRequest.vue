<template>
  <v-app>
    <v-container bg fill-height grid-list-md text-xs-center>
      <v-layout row wrap align-center>
        <v-flex>
          <v-card class="mx-auto my-12" max-width="374">
            <v-card-title>Feature Request</v-card-title>

            <v-card-text>
              <div>
                Please Join the whatsApp group or mail me for feature requests
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-actions>
              <v-btn
                color="deep-orange"
                text
                href="/featureRequest"
                target="_blank"
              >
                WhatsApp Group Link
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {}
</script>
