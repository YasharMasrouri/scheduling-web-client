<template>
  <div id="add-multiple-container" >
    <div id="add-multiple-box">
      <form class="text-center">
        <v-text-field
            color="#ED6038"
            label="First Name"
            class="headline"
            v-model="firstName"
        ></v-text-field>
        <v-text-field
            color="#ED6038"
            label="Last Name"
            class="headline"
            v-model="lastName"
        ></v-text-field>
        <v-text-field
            color="#ED6038"
            label="Code"
            class="headline"
            v-model="code"
        ></v-text-field>
        <v-text-field
            color="#ED6038"
            label="Password"
            class="headline"
            v-model="password"
        ></v-text-field>
        <button id="add-multiple-btn" @click="add">Add</button>
      </form>
      <div id="added-accounts">
        <div class="added-account" v-for="index in list" :key="index.code">
          <label class="account-name">{{ index.firstName }} {{ index.lastName }}</label>
          <label class="account-id">{{ index.code }}</label>
          <button class="account-remove" title="Remove" @click="delet(index.code)"><i class="far fa-times-circle"></i></button>
        </div>
        <button id="save-accounts" @click="save">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddMultiple",
  data() {
    return {
      firstName : '' ,
      lastName : '',
      code : '' ,
      password : '',
      list : []
    }
  },
  methods : {
    save(e) {
      e.preventDefault()
      this.$emit('saveMultiple')
    },
    delet(code) {
      const num = this.list.findIndex(a => a.code == code)
      this.list.splice(num , 1)
    },
    add(e) {
      e.preventDefault()
      const obj = {
        firstName : this.firstName,
        lastName : this.lastName,
        code : this.code ,
        password : this.password,
      }
      this.list.push(obj)
      this.firstName = ''
      this.lastName = ''
      this.code = ''
      this.password = ''
    },
    closePopUp() {
      this.$emit('closePopUps')
    }
  }
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#add-multiple-container {
  @include popup-container;

  #add-multiple-box {
    width: 27%;
    height: fit-content;
    background: white;
    border-radius: 30px;
    padding: 32px;
    max-height: 80%;
    overflow-y: auto;
    position: absolute;

    #add-multiple-btn {
      background: $color-orange-main;
      color: white;
      border-radius: 30px;
      padding: 10px 44px;
    }
    #add-multiple-btn:hover {
      background: lighten($color-orange-main,5%);
    }

    #added-accounts {
      text-align: center;
      margin-top: 16px;

      .added-account {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid;
        padding: 8px 0;

        .account-name {
          width: 50%;
          text-align: left;
        }
        .account-id {
          width: 40%;
          text-align: left;
        }
        .account-remove {
          width: 10%;
          text-align: right;
          color: $color-orange-main;
        }
        .account-remove:hover {
          //color: lighten($color-orange-main,5%);
          color: red;
        }
      }

      #save-accounts,
      #abort-accounts {
        background: $color-orange-main;
        color: white;
        border-radius: 30px;
        padding: 10px 44px;
        margin: 16px 8px 0;
      }
      #save-accounts:hover,
      #abort-accounts:hover {
        background: lighten($color-orange-main,5%);
      }
    }

  }


}
@include scrollbar;
</style>