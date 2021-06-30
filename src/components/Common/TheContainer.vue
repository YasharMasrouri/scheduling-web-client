<template>

  <div class="page">
    <div class="TheContainer pa-4 text-center d-flex">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheContainer"
}
</script>

<style scoped>
.page {
  background-color:  #E3EFF6;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.TheContainer {
  border-radius: 30px;
  background-color: #ffffff;
  width: 70vw;
  height: 70vh;
  display: flex;
  justify-content: center;
}
</style>