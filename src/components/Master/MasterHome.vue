<template>
  <div id="master-home-container">
<!--    <MSTable></MSTable>-->
    <div id="master-home-image"></div>
  </div>
</template>

<script>
export default {
  name: "MasterHome",
  components: {}
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#master-home-container {
  width: 100%;
  height: 100%;
  @include flex-center;

}

#master-home-image {
  background-image: url("./../../assets/MasterHome.svg");
  @include page-image;
}

</style>