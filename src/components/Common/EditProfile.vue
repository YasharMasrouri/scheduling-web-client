<template>
  <TheContainer >
    <div class="text-center">
    <v-card flat class="ma-3">

      <v-responsive >
        <div class="avatar">
        <v-avatar class="my-4" size="150">
          <img src="https://picsum.photos/id/11/500/300" />
        </v-avatar>

        </div>
      </v-responsive>

      <v-card-text class="d-flex justify-center">
        <div class="text-center display-1 black--text mt-1">Name: Jafar Tanha</div>
        <div class="text-center headline black--text mt-1">Code:12345678</div>
        <div class="text-center headline black--text my-1">Role: Master</div>
      </v-card-text>

      <v-card-action >
<div class="editBtns">
        <EditName />
        <EditPassword />
</div>
      </v-card-action>
      <v-file-input
          color="#ED6038"
          label="Pick Avatar"
          prepend-icon="mdi-camera"
      ></v-file-input>
    </v-card>
    </div>
  </TheContainer>
</template>

<script>
import TheContainer from "./TheContainer";
import EditName from "./EditName";
import EditPassword from "./EditPassword";
export default {
  name: "EditProfile",
  components: {
    TheContainer,
    EditName,
    EditPassword
  },
}
</script>

<style scoped>
.text-center{
  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar{
  display: flex;
  justify-content: center;
}

.editBtns{
  display: flex;
  justify-content: center;
}
</style>