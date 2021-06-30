<template>
  <div class="page">
    <div class="theContainer">
      <v-row>
        <v-col sm6 class="login">
          <div class="text-center">
            <h3 class="title pb-8">welcome back</h3>
            <form class="text-center d-flex justify-center">
              <v-text-field
                  color="#ED6038"
                  label="code"
                  class="headline"
              ></v-text-field>
              <v-text-field
                  class="headline"
                  color="#ED6038"
                  label="password"
              ></v-text-field>
            </form>
            <div class="center">
              <v-btn
                  rounded
                  elevation="1"
                  color="#ED6038"
                  class="loginBtn white--text text-capitalize font-weight-medium body-1 mt-3"
              >Login Now</v-btn
              >
            </div>
            <p class="caption center" router>forget password?</p>
          </div>
        </v-col>
        <v-divider inset vertical></v-divider>
        <v-col sm6>
          <!-- <v-responsive>
  <img src="./pic1.png" alt="">
   </v-responsive> -->
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage"
}
</script>

<style scoped>
div.page {
  background-color: #b0d3e5;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

div.theContainer {
  border-radius: 30px;
  background-color: #ffffff;
  width: 80vw;
  height: 80vh;
  display: flex;
}

.login {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  margin-bottom: 0.5em;
  display: flex;
  justify-content: center;
}

.loginBtn {
  width: 80%;
  color: white;
}


.caption {
  color:#64A7CB;
}

.center{
  display: flex;
  justify-content: center;
  padding-top:5px;

}
</style>