<template>
  <div class="page">
    <div class="theContainer">
      <v-row>
        <v-col sm6 class="login">
          <div class="text-center">
            <h3 class="title pb-8">welcome back</h3>
            <form class="text-center">
              <v-text-field
                  color="#ED6038"
                  label="code"
                  class="headline"
                  v-model="code"
              ></v-text-field>

                <v-text-field
                    type="password"
                    class="headline pass"
                    color="#ED6038"
                    label="password"
                    v-model="password"
                    append-icon="mdi-eye"
                >
                </v-text-field>
            </form>
            <div class="center">
              <v-btn
                  large
                  rounded
                  elevation="1"
                  color="#ED6038"
                  class="loginBtn white--text text-capitalize subtitle-1 mt-3"
                  @click="logIn"
              >Login Now</v-btn
              >
            </div>
            <p class="caption center" router>forget password?</p>
          </div>
        </v-col>
        <v-divider inset vertical></v-divider>
        <v-col class="imgCol" sm6 style="display: flex ; align-items: center ; justify-items: center">
           <v-responsive style="width: auto" >
              <img src="../../assets/LogIn.svg" alt="" style="width: 90%; margin-left: 25px">
           </v-responsive>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      code : "",
      password : null,
      passwordIsFocoused : true,
    }
  },
  methods :{
    logIn() {
      const sendingJson = JSON.stringify({
        code : this.code,
        password : this.password
      })
      fetch(this.$store.state.ServerUrl + "/api/Auth/Login" , {
        method : "POST" ,
        body : sendingJson
      }).then(response => {
        if (response.ok) {
          return response.json()
        }
        else {
          //password or code wrong
        }
      }).then(json => {
        const state = {
          token : json.token,
          expireAt : json.expireAt,
          user : {
            firstName : json.user.firstName,
            lastName : json.user.lastName,
            id : json.user.id,
            code : this.code,
            password : this.password,
            role : json.user.role,
            userImage : json.user.image,
          },
        }
        this.$store.dispatch('SetState' , state)
        this.$router.push(`/${state.user.role}/Home`)
      })

    }
  }
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

.imgCol{
  background-clip: content-box;
  border-radius:0 38px 38px 0;
  padding-left: 0;
  background-color: #E3EFF6;
}

</style>