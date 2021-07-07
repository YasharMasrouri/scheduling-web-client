<template>
  <div>
  <the-container>

  </the-container>
    <div id="student-page-image"></div>
  </div>
</template>

<script>
import TheContainer from "../Common/TheContainer";

export default {
  name: "StudentHome",
  components: {TheContainer}
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

 #student-page-image{
   background-image: url("./../../assets/StudentHome.svg");
   @include page-image;
 }

</style>