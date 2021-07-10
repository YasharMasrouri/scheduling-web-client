<template>
  <div id="add-one-container" @click="closePopUp">
    <div id="add-one-box">
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
        <button id="add-one-btn" @click="save">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddOne",
  data() {
    return {
      firstName : '' ,
      lastName : '',
      code : '' ,
      password : ''
    }
  },
  methods : {
    closePopUp() {
      this.$emit('closePopUps')
    },
    save(e) {
      e.preventDefault()
      this.$emit('saveOne')
    }
  }
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#add-one-container {
  @include popup-container;

  #add-one-box {
    width: 27%;
    height: fit-content;
    background: white;
    border-radius: 30px;
    padding: 32px;

    #add-one-btn {
      background: $color-orange-main;
      color: white;
      border-radius: 30px;
      padding: 10px 44px;
    }
    #add-one-btn:hover {
      background: lighten($color-orange-main,5%);
    }
  }
}
</style>