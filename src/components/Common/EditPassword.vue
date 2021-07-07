<template>
  <v-dialog class="dialog" max-width="500px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          large
          rounded
          slot="activator"
          color="#ED6038"
          class="passB text-capitalize white--text subtitle-1 ml-1 mt-3"
          v-bind="attrs"
          v-on="on"
      >Edit Password</v-btn
      >
    </template>

    <v-card flat class="text-center pt-3">
      <v-card-text>
        <v-form>
          <v-text-field
              color="#ED6038"
              label="current password"
              type="password"></v-text-field>

          <v-text-field
              color="#ED6038"
              label="new password"
              type="password" ></v-text-field>

          <v-text-field
              color="#ED6038"
              label="confirm new password"
              type="password"></v-text-field>

          <v-btn
              color="#ED6038"
              class="saveBtn white--text text-capitalize"
              rounded>Save</v-btn>

        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "EditPassword"
}
</script>

<style scoped>

.passB{
  width: 48%;
  color: white;
  margin-left: 3px;
}

.saveBtn {
  width: 40%;
  color: white;
}
</style>