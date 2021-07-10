<template>
  <div id="master-page-container">
    <the-header>
      <router-link class="the-header-list-item"  to="/Master/Home">Home</router-link>
      <router-link class="the-header-list-item"  to="/Master/Announcements">Announcements</router-link>
      <router-link class="the-header-list-item"  to="/Master/AdaptSchedule">AdaptSchedule</router-link>
      <router-link class="the-header-list-item"  to="/Master/SelectedSchedule">SelectedSchedule</router-link>
    </the-header>
    <the-container>
      <router-view></router-view>
    </the-container>
  </div>

</template>

<script>
import TheHeader from "../Common/TheHeader";
import TheContainer from "../Common/TheContainer";
export default {
  name: "MasterPage",
  components: {TheContainer, TheHeader}
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#master-page-container {
  @include page-container;

}
</style>