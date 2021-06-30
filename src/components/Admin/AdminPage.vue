<template>
  <div class="fullpage">
    <the-header style="margin: 0 auto; margin-top: 25px">
      <router-link to="/Admin/Home">Home</router-link>
      <router-link to="/Admin/Data">Datas</router-link>
      <router-link to="/Admin/Students">Students</router-link>
      <router-link to="/Admin/Masters">Masters</router-link>
      <router-link to="/Admin/Announcements">Announcements</router-link>
    </the-header>
    <router-view style="margin: 0 auto; margin-top: 35px"></router-view>
  </div>

</template>

<script>
import TheHeader from "../Common/TheHeader";
export default {
  name: "AdminPage",
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