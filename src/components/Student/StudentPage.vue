<template>
  <div>
    <the-header>
      <router-link to="/Student/Home">Home</router-link>
      <router-link to="/Student/Announcements">Announcements</router-link>
      <router-link to="/Student/Courses">Courses</router-link>
      <router-link to="/Student/SelectedCourses">SelectedCourses</router-link>
    </the-header>
    <router-view></router-view>
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

</style>