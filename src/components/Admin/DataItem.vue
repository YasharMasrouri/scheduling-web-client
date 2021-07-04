<template>
  <div id="data-item-container">
    <div id="data-item-edit"><button><i class="far fa-pen"></i></button></div>
    <div id="data-item-delete"><button><i class="far fa-trash"></i></button></div>
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
  position: relative;

  #data-item-edit {
    width: 45px;
    height: 45px;
    position: absolute;
    top: 0;
    left: 0;

    button {
      width: 100%;
      height: 100%;
      background: $color-blue-btn;
      border-radius: 50%;
      color: white;
    }
    button:hover {
      background: lighten($color-blue-btn,5%);
    }
  }
  #data-item-delete {
    width: 45px;
    height: 45px;
    position: absolute;
    top: 0;
    right: 0;

    button {
      width: 100%;
      height: 100%;
      background: $color-orange-main;
      border-radius: 50%;
      color: white;
    }
    button:hover {
      background: lighten($color-orange-main,5%);
    }
  }
}
</style>