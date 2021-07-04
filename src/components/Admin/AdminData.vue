<template>
  <div id="admin-data-container">
    <div id="admin-data-backdrop"></div>
    <div id="admin-data-image"></div>
  </div>
</template>

<script>
export default {
  name: "AdminData",
  components: {}
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#admin-data-container {
  width: 100%;
  height: 100%;
  @include flex-center;

  #admin-data-backdrop {
    display: none;
    @include page-backdrop;
  }

  #admin-data-image {
    background-image: url("./../../assets/AdminDatas.svg");
    @include page-image;
  }
}
</style>