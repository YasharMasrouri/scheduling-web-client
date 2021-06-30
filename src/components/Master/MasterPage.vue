<template>
  <div class="fullpage">
    <the-header style="margin: 0 auto; margin-top: 25px" >
      <router-link to="/Master/Home">Home</router-link>
      <router-link to="/Master/Announcements">Announcements</router-link>
      <router-link to="/Master/AdaptSchedule">AdaptSchedule</router-link>
      <router-link to="/Master/SelectedSchedule">SelectedSchedule</router-link>
    </the-header>
    <router-view style="margin: 0 auto; margin-top: 35px"></router-view>
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
.fullpage{
  background-color: #E3EFF6;
  height: 100vh;
  width: 100vw;

}
</style>