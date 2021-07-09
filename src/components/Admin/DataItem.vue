<template>
  <div id="data-item-container">
    <div id="data-item-edit" @click="edit"><button><i class="far fa-pen"></i></button></div>
    <div id="data-item-delete" @click="delet"><button><i class="far fa-trash"></i></button></div>
    <div id="data-item-box"><p><slot></slot></p></div>
  </div>
</template>

<script>
export default {
  name: "DataItem",
  methods : {
    edit() {
      this.$emit('edit')
    },
    delet() {
      this.$emit('delet')
    }
  }
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";
#data-item-container {
  height: 140px;
  margin: 32px;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-end;

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
  #data-item-box {
    width: calc(100% - 40px);
    height: calc(100% - 22px);
    border: 2px solid $color-orange-main;
    border-radius: 0 0 30px 30px;

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    p {
      font-size: 20px;
      font-weight: bold;
      margin: 0;
    }
  }
}
</style>