<template>

  <div id="table-cell-container">
    <div id="table-cell-box">
      <div id="cell-box-items">
        <cell-item>
          <span slot="cell-item-title">Title</span>
          <span slot="cell-item-master">Master</span>
        </cell-item>
        <cell-item>
          <span slot="cell-item-title">Algorithms</span>
          <span slot="cell-item-master">Tanha</span>
        </cell-item>
      </div>
      <div id="cell-box-close-div">
        <button id="cell-box-close-btn">close</button>
      </div>
    </div>

  </div>

</template>

<script>
import CellItem from "@/components/Admin/CellItem";

export default {
  name: "TableCell",
  components: {CellItem}
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";


#table-cell-container {
  @include popup-container;

  #table-cell-box {
    width: 27%;
    height: 80%;
    background: white;
    border-radius: 30px;
    padding: 32px;
    overflow-y: auto;
    display: grid;
    grid-template-rows: 92% 8%;

    #cell-box-items {
      overflow-y: auto;
    }

    #cell-box-close-div {
      //margin: 16px;
      padding: 8px 0;
      text-align: right;

      #cell-box-close-btn {
        background: $color-orange-main;
        color: white;
        border: none;
        border-radius: 15px;
        padding: 8px 16px;
      }
      #cell-box-close-btn:hover {
        background: lighten($color-orange-main,10%);
      }
    }
  }
}

@include scrollbar;
</style>