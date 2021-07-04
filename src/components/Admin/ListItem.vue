<template>
  <div id="list-item-container">
    <div id="list-item-name"><label>Yashar Masrouri</label></div>
    <div id="list-item-id"><label>123456789</label></div>
    <div id="list-item-buttons">
      <button id="list-item-edit"><i class="far fa-pen"></i></button>
      <button id="list-item-delete"><i class="far fa-trash"></i></button>
    </div>
  </div>

</template>

<script>
export default {
  name: "ListItem"
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#list-item-container {
  width: 100%;
  height: 70px;
  border-bottom: 1px solid black;
}
</style>