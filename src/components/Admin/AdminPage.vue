<template>
  <div id="admin-page-container">
    <the-header>
      <router-link class="the-header-list-item" to="/Admin/Home">Home</router-link>
      <router-link class="the-header-list-item" to="/Admin/Data">Datas</router-link>
      <router-link class="the-header-list-item" to="/Admin/Students">Students</router-link>
      <router-link class="the-header-list-item" to="/Admin/Masters">Masters</router-link>
      <router-link class="the-header-list-item" to="/Admin/Announcements">Announcements</router-link>
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

<style scoped lang="scss">
@import "./../../../public/-variables";

#admin-page-container {
  height: 100vh;
  display: grid;
  grid-template-areas:
  'header'
  'body';
  grid-template-rows: 13% 87%;
  grid-template-columns: 100%;
  align-items: center;
  background: $color-background;
}
</style>