<template>
  <v-app class="#E3EFF6">
      <router-view></router-view>
  </v-app>

</template>

<script>

export default {
  name: 'App',
  components: {},
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import "../public/dist/FontAwesome/css/all.css";
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  
}
</style>
