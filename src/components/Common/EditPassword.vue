<template>
  <v-dialog class="dialog" max-width="500px" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          large
          rounded
          slot="activator"
          color="#ED6038"
          class="passB text-capitalize white--text subtitle-1 ml-1 mt-3"
          v-bind="attrs"
          v-on="on"
      >Edit Password
      </v-btn
      >
    </template>

    <v-card flat class="text-center pt-3">
      <v-card-text>
        <v-form>
          <v-text-field
              color="#ED6038"
              label="current password"
              type="password"
              v-model="oldPass"
          ></v-text-field>

          <v-text-field
              color="#ED6038"
              label="new password"
              type="password"
              v-model="newPass"
          ></v-text-field>

          <v-text-field
              color="#ED6038"
              label="confirm new password"
              type="password"
              v-model="newPassConfirm"
          ></v-text-field>

          <v-btn
              @click="checkNewPass"
              color="#ED6038"
              class="saveBtn white--text text-capitalize"
              rounded>Save
          </v-btn>

        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "EditPassword",
  data() {
    return {
      dialog : false ,
      oldPass : '',
      newPass : '',
      newPassConfirm : ''
    }
  },
  methods : {
    checkNewPass() {
      if (this.newPass === this.newPassConfirm && this.oldPass === this.$store.state.user.password){
        // make green
        //save to database
        this.$store.state.user.password = this.newPass
        this.oldPass = ''
        this.newPass = ''
        this.newPassConfirm = ''
        this.dialog = false
        alert('password changed successfully')
      }
      else {
        //make red
        alert('something went wrong')
      }
    }
  },
  watch : {
    dialog(val) {
      if (!val) {
        this.oldPass = ''
        this.newPass = ''
        this.newPassConfirm = ''
      }
    }
  }
}
</script>

<style scoped>

.passB {
  width: 48%;
  color: white;
  margin-left: 3px;
}

.saveBtn {
  width: 40%;
  color: white;
}
</style>