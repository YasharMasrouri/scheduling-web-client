<template>
  <div>
    <the-header>
      <router-link to="/Master/Home">Home</router-link>
      <router-link to="/Master/Announcements">Announcements</router-link>
      <router-link to="/Master/AdaptSchedule">AdaptSchedule</router-link>
      <router-link to="/Master/SelectedSchedule">SelectedSchedule</router-link>
    </the-header>
    <router-view></router-view>
  </div>

</template>

<script>
import TheHeader from "../Common/TheHeader";
export default {
  name: "MasterPage",
  components: {TheHeader}
}
</script>

<style scoped>

</style>