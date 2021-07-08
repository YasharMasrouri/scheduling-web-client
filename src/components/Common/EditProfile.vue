<template>
  <div id="editProfile-container">
    <div class="text-center">
      <v-card flat class="ma-3">

        <v-responsive>
          <div class="imgDiv">
            <v-avatar id="avatar" class="my-4" size="200">
              <img src="https://picsum.photos/id/11/500/300"/>
              <input type="file" id="file">
              <label for="file" id="uploadBtn">

                <v-icon color="white">mdi-camera</v-icon>
              </label>
            </v-avatar>

          </div>
        </v-responsive>

        <v-card-text>
          <div class="text-center display-1 black--text mt-1">Name: Jafar Tanha</div>
          <div class="text-center headline black--text mt-1">Code:12345678</div>
          <div class="text-center headline black--text my-1">Role: Master</div>
        </v-card-text>

        <v-card-action>
          <div class="editBtns">
            <EditName/>
            <EditPassword/>
          </div>
        </v-card-action>

      </v-card>
    </div>
  </div>
</template>

<script>
import EditName from "./EditName";
import EditPassword from "./EditPassword";

export default {
  name: "EditProfile",
  components: {
    EditName,
    EditPassword
  },
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#editProfile-container {
  width: 100%;
  height: 100%;
  @include flex-center;

  #avatar {
    border: 1px solid grey;
  }

  #file {
    display: none;
  }

  #uploadBtn {
    width: 100%;
    height: 40px;
    bottom: 0;
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    color: wheat;
    line-height: 30px;
    cursor: pointer;
  }

  .text-center {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25vw;
  }

  .imgDiv {
    display: flex;
    justify-content: center;
  }

  .editBtns {
    display: flex;
    justify-content: center;
  }
}

</style>