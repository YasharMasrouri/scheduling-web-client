<template>
  <div id="list-item-container">
    <div id="list-item-name"><slot name="name"></slot></div>
    <div id="list-item-id"><slot name="id"></slot></div>
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
  border-bottom: 1px solid black;
  padding: 8px 0;
  margin: 16px 0;
  display: grid;
  grid-template-columns: 5fr 4fr 3fr;
  align-content: center;

  #list-item-name{
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    font-size: 15pt;
  }
  #list-item-id{
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    font-size: 15pt;
  }
  #list-item-buttons {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
    button {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      color: white;
    }
    #list-item-edit {
      background: $color-blue-btn;
    }
    #list-item-edit:hover {
      background: lighten($color-blue-btn,5%);
    }
    #list-item-delete {
      background: $color-orange-main;
      margin-left: 8px;
    }
    #list-item-delete:hover {
      background: lighten($color-orange-main,5%);
    }
  }
}
</style>