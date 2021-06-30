<template>
  <div class="fullpage">
    <the-header style="margin: 0 auto; margin-top: 25px">
      <router-link to="/Student/Home">Home</router-link>
      <router-link to="/Student/Announcements">Announcements</router-link>
      <router-link to="/Student/Courses">Courses</router-link>
      <router-link to="/Student/SelectedCourses">SelectedCourses</router-link>
    </the-header>
    <router-view style="margin: 0 auto; margin-top: 35px"></router-view>
  </div>
</template>

<script>
import TheHeader from "../Common/TheHeader";
export default {
  name: "StudentPage",
  components: {TheHeader}
}
</script>

<style scoped>
.fullpage{
  background-color: #E3EFF6;
  height: 100vh;
  width: 100vw;

}
</style>