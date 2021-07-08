<template>
  <div id="student-selected-container">
    <middle class="scroll">
      <div class="pl-5">
        <v-row>
          <Courses/>
          <Courses/>
          <Courses/>
          <Courses/>
          <Courses/>
          <Courses/>
          <Courses/>
          <Courses/>
          <Courses/>
          <Courses/>


        </v-row>
      </div>
    </middle>

    <div id="student-selected-image"></div>
  </div>

</template>

<script>
import Courses from "./Courses";

export default {
  name: "StudentSelected",
  components: {Courses}
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#student-selected-container {
  width: 100%;
  height: 100%;
  @include flex-center;

  .scroll {
    width: 100%;
    height: 90%;
    overflow-y: scroll;
    overflow-x: hidden;
    margin: 20px;
    padding: 20px;
  }
}

#student-selected-image {
  background-image: url("./../../assets/StudentSelectedCourses.svg");
  @include page-image;
}
</style>