<template>

<!--  <div class="page">-->
    <div class="TheContainer pa-4 text-center d-flex">
      <slot></slot>
    </div>
<!--  </div>-->
</template>

<script>
export default {
  name: "TheContainer"
}
</script>

<style scoped>


.TheContainer {
  border-radius: 30px;
  background-color: #ffffff;
  width: 70vw;
  height: 70vh;
  display: flex;
  justify-content: center;
}
</style>