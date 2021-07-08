<template>
  <div id="add-one-container">
    <div id="add-one-box">
      <form class="text-center">
        <v-text-field
            color="#ED6038"
            label="Name"
            class="headline"
        ></v-text-field>
        <v-text-field
            color="#ED6038"
            label="Code"
            class="headline"
        ></v-text-field>
        <v-text-field
            color="#ED6038"
            label="Password"
            class="headline"
        ></v-text-field>
        <button id="add-one-btn">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddOne"
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