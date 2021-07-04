<template>
  <div id="data-item-container">
    <div id="data-item-edit"></div>
    <div id="data-item-delete"></div>
    <div id="data-item-box"></div>
  </div>
</template>

<script>
export default {
  name: "DataItem"
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";
#data-item-container {
  height: 140px;
  border: 1px solid black;
  margin: 32px;

  #data-item-edit {
    width: 45px;
    height: 45px;
    background: $color-orange-main;
    border-radius: 50%;
  }
  #data-item-delete {
    width: 45px;
    height: 45px;
    background: $color-blue-btn;
    border-radius: 50%;
  }
}
</style>