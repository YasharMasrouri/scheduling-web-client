<template>
  <div>
    <the-header>
      <router-link to="/Admin/Home">Home</router-link>
      <router-link to="/Admin/Data">Datas</router-link>
      <router-link to="/Admin/Students">Students</router-link>
      <router-link to="/Admin/Masters">Masters</router-link>
      <router-link to="/Admin/Announcements">Announcements</router-link>
    </the-header>
    <router-view></router-view>
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

</style>