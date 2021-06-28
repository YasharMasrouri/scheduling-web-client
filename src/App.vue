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
