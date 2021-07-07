<template>
  <div id="cell-item-container">
    <h5 class="cell-item-title"><slot name="cell-item-title"></slot></h5>
    <p class="cell-item-master"><slot name="cell-item-master"></slot></p>
  </div>
</template>

<script>
export default {
  name: "CellItem"
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#cell-item-container {
  margin: 16px;
  border-bottom: 1px solid $color-orange-main;
  padding: 8px 0;

  .cell-item-title {
    font-size: 16pt;
    margin: 6px 0;
  }
  .cell-item-master {
    font-size: 14pt;
    margin: 6px 0;
  }
}
</style>