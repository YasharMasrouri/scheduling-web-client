<template>
  <div id="add-course-container" >
    <div id="add-course-box">
      <form class="text-center">
        <v-text-field
            color="#ED6038"
            label="Course title"
            class="headline"
            v-model="txt"
        ></v-text-field>
        <v-text-field
            color="#ED6038"
            label="Units"
            class="headline"
            type="number"
        ></v-text-field>
        <button id="add-course-btn" @click="save">Add</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddCourse",
  data() {
    return {
      txt : ''
    }
  },
  methods : {
    closeWindow() {
      this.$emit('closeWindow')
    },
    save(e) {
      e.preventDefault()
      this.$emit('saveC')
    }
  }
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#add-course-container {
  @include popup-container;

  #add-course-box {
    width: 27%;
    height: fit-content;
    background: white;
    border-radius: 30px;
    padding: 32px;

    #add-course-btn {
      background: $color-orange-main;
      color: white;
      border-radius: 30px;
      padding: 10px 44px;
    }
    #add-course-btn:hover {
      background: lighten($color-orange-main,5%);
    }
  }
}
</style>