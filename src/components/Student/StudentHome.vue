<template>
  <div id="student-home-container">

    <div id="student-home-image"></div>
  </div>
</template>

<script>

export default {
  name: "StudentHome",
  components: {}
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#student-home-container {
  width: 100%;
  height: 100%;
  @include flex-center;
}

#student-home-image {
  background-image: url("./../../assets/StudentHome.svg");
  @include page-image;
}

</style>