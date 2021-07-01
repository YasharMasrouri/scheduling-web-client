<template>
  <div id="admin-page-container">
    <the-header>
      <router-link class="the-header-list-item list-item-active" to="/Admin/Home">Home</router-link>
      <router-link class="the-header-list-item" to="/Admin/Data">Datas</router-link>
      <router-link class="the-header-list-item" to="/Admin/Students">Students</router-link>
      <router-link class="the-header-list-item" to="/Admin/Masters">Masters</router-link>
      <router-link class="the-header-list-item" to="/Admin/Announcements">Announcements</router-link>
    </the-header>
<!--    <router-view></router-view>-->
    <the-container>
      <router-view></router-view>
    </the-container>
  </div>

</template>

<script>
import TheHeader from "../Common/TheHeader";
import TheContainer from "@/components/Common/TheContainer";
export default {
  name: "AdminPage",
  components: {TheContainer, TheHeader}
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#admin-page-container {
  @include page-container;
}
</style>