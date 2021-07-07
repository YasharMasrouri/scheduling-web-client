<template>
  <div id="student-page-container">
    <the-header>
      <router-link class="the-header-list-item " to="/Student/Home">Home</router-link>
      <router-link  class="the-header-list-item " to="/Student/Announcements">Announcements</router-link>
      <router-link  class="the-header-list-item " to="/Student/Courses">Courses</router-link>
      <router-link  class="the-header-list-item " to="/Student/SelectedCourses">SelectedCourses</router-link>
    </the-header>
<!--    <router-view style="margin: 0 auto; margin-top: 35px"></router-view>-->

    <the-container>
<!--<student-home></student-home>-->
<!--<student-selected></student-selected>-->
<!-- <student-course-select></student-course-select>-->
      <student-announcements></student-announcements>
    </the-container>

  </div>
</template>

<script>
import TheContainer from "@/components/Common/TheContainer";
import TheHeader from "../Common/TheHeader";

// import StudentHome from "./StudentHome";
// import StudentCourseSelect from "./StudentCourseSelect";
// import StudentSelected from "./StudentSelected";
import StudentAnnouncements from "./StudentAnnouncements";
export default {
  name: "StudentPage",
  components: {
    StudentAnnouncements,
    // StudentHome,
    // StudentSelected,
    // StudentCourseSelect,

    TheContainer ,
    TheHeader,
  }
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#student-page-container {
  @include page-container;

}
</style>