<template>

  <div id="table-cell-container">
      <div id="table-cell-box">

      </div>


  </div>

</template>

<script>
export default {
  name: "TableCell"
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";


#table-cell-container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 5;
  @include flex-center;

  #table-cell-box {
    width: 27%;
    height: 80%;
    background: white;
    border-radius: 30px;
  }
}

</style>