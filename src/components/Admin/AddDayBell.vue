<template>
  <div id="add-day-container" @click="closeWindow">
    <div id="add-day-box">
      <form class="text-center">
        <v-text-field
            color="#ED6038"
            label="Day/Bell title"
            class="headline"
            v-model="txt"
        ></v-text-field>
        <button id="add-day-btn" @click="save">Add</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddDayBell",
  data() {
    return {
      txt : ''
    }
  },
  methods : {
    closeWindow() {
      this.$emit('closeWindow')
    },
    save() {
      this.$emit('saveDB')
    }
  }
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