<template>
  <div id="student-page-container">
    <the-header>
      <router-link class="the-header-list-item " to="/Student/Home">Home</router-link>
      <router-link class="the-header-list-item " to="/Student/Announcements">Announcements</router-link>
      <router-link class="the-header-list-item " to="/Student/Courses">Courses</router-link>
      <router-link class="the-header-list-item " to="/Student/SelectedCourses">SelectedCourses</router-link>
    </the-header>

    <the-container>
      <router-view></router-view>
    </the-container>

  </div>
</template>

<script>
import TheContainer from "@/components/Common/TheContainer";
import TheHeader from "../Common/TheHeader";

export default {
  name: "StudentPage",
  components: {
    TheContainer,
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