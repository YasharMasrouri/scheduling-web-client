<template>
  <div id="admin-page-container">
    <the-header>
      <router-link class="the-header-list-item list-item-active" to="/Admin/Home">Home</router-link>
      <router-link class="the-header-list-item" to="/Admin/Data">Data</router-link>
      <router-link class="the-header-list-item" to="/Admin/Students">Students</router-link>
      <router-link class="the-header-list-item" to="/Admin/Masters">Masters</router-link>
      <router-link class="the-header-list-item" to="/Admin/Announcements">Announcements</router-link>
    </the-header>
<!--    <router-view></router-view>-->
    <the-container>
<!--      <router-view></router-view>-->
<!--      <admin-home></admin-home>-->
<!--      <admin-data></admin-data>-->
<!--      <admin-students></admin-students>-->
<!--      <admin-masters></admin-masters>-->
<!--      <m-a-announcements></m-a-announcements>-->
      <edit-profile></edit-profile>
    </the-container>

  </div>

</template>

<script>
import TheHeader from "../Common/TheHeader";
import TheContainer from "@/components/Common/TheContainer";
import EditProfile from "@/components/Common/EditProfile";
export default {
  name: "AdminPage",
  components: {EditProfile, TheContainer, TheHeader}
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#admin-page-container {
  @include page-container;

}
</style>