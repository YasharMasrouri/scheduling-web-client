<template>
  <div id="student-selected-container">
    <div class="scroll">
      <div class="pl-5">
        <v-row>
          <courses v-for="course in courses" :key="course.id" :course="course" :selectable="false"/>
        </v-row>
      </div>
    </div>

    <div id="student-selected-image"></div>
  </div>

</template>

<script>
import Courses from "./Courses";

export default {
  name: "StudentSelected",
  components: {Courses},
  data() {
    return {
      courses: [
        {
          id: 0,
          title: "Yallah kishi yoxsan hesh",
          master: "Juvan",
          time: "bidana time"
        },
        {
          id: 1,
          title: "Yallah kishi yoxsan hesh",
          master: "Juvan",
          time: "bidana time"
        },
        {
          id: 2,
          title: "Yallah kishi yoxsan hesh",
          master: "Juvan",
          time: "bidana time"
        },
        {
          id: 3,
          title: "Yallah kishi yoxsan hesh",
          master: "Juvan",
          time: "bidana time"
        },
        {
          id: 4,
          title: "Yallah kishi yoxsan hesh",
          master: "Juvan",
          time: "bidana time"
        },
      ]
    }
  }
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