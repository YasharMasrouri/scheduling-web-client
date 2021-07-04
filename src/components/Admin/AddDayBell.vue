<template>
  <div id="add-day-container">
    <div id="add-day-box">
      <form class="text-center">
        <v-text-field
            color="#ED6038"
            label="Day/Bell title"
            class="headline"
        ></v-text-field>
        <button id="add-day-btn">Add</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddDayBell"
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#add-day-container {
  @include popup-container;

  #add-day-box {
    width: 27%;
    height: fit-content;
    background: white;
    border-radius: 30px;
    padding: 32px;

    #add-day-btn {
      background: $color-orange-main;
      color: white;
      border-radius: 30px;
      padding: 10px 44px;
    }
    #add-day-btn:hover {
      background: lighten($color-orange-main,5%);
    }
  }
}
</style>