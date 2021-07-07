<template>
  <div id="master-page-container">
    <the-header>
      <router-link class="the-header-list-item"  to="/Master/Home">Home</router-link>
      <router-link class="the-header-list-item"  to="/Master/Announcements">Announcements</router-link>
      <router-link class="the-header-list-item"  to="/Master/AdaptSchedule">AdaptSchedule</router-link>
      <router-link class="the-header-list-item"  to="/Master/SelectedSchedule">SelectedSchedule</router-link>
    </the-header>
<!--    <router-view style="margin: 0 auto; margin-top: 35px"></router-view>-->

    <the-container>
<master-adapt-schedule></master-adapt-schedule>
<!--      <master-selected></master-selected>-->
<!--      <master-home></master-home>-->
    </the-container>
  </div>

</template>

<script>
import TheHeader from "../Common/TheHeader";
import TheContainer from "../Common/TheContainer";
// import MasterHome from "./MasterHome";
import MasterAdaptSchedule from "./MasterAdaptSchedule";
// import MasterSelected from "./MasterSelected";
export default {
  name: "MasterPage",
  components: {
    // MasterHome,
    // MasterSelected,
    MasterAdaptSchedule,
    TheContainer, TheHeader}
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#master-page-container {
  @include page-container;

}
</style>