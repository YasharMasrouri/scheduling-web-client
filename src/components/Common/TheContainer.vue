<template>
  <div id="the-container" class="TheContainer pa-4 text-center d-flex">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TheContainer"
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#the-container {
  margin:auto;
  width: 82%;
  height: 88%;
  border-radius: 30px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
}
//.TheContainer {
//  border-radius: 30px;
//  background-color: #ffffff;
//  width: 70vw;
//  height: 70vh;
//  display: flex;
//  justify-content: center;
//}
</style>