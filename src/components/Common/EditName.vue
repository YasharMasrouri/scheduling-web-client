<template>
  <v-dialog class="dialog" max-width="400px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          large
          rounded
          slot="activator"
          color="#ED6038"
          class="nameB text-capitalize white--text subtitle-1 mr-1 mt-3"
          v-bind="attrs"
          v-on="on"
      >Edit Name</v-btn>
    </template>

    <v-card flat class="text-center pt-3">
      <v-card-text>
        <v-form>
          <v-text-field color="#ED6038" label="name"></v-text-field>
          <v-btn
              color="#ED6038"
              class="saveBtn white--text text-capitalize "
              rounded>Save</v-btn>

        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>

</template>

<script>
export default {
  name: "EditName"
}
</script>

<style scoped>
.nameB {
  width: 47%;
  color: white;
  margin-right: 3px;
}

.saveBtn {
  width: 40%;
  color: white;
}
</style>