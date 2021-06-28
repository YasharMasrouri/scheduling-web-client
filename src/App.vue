<template>
<!--  <router-view></router-view>-->
  <admin-page></admin-page>
</template>

<script>

import AdminPage from "@/components/Admin/AdminPage";
export default {
  name: 'App',
  components: {AdminPage},
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import "../public/dist/FontAwesome/css/all.css";

*{
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
</style>
