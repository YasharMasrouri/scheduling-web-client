<template>
  <div id="admin-masters-container">
    <div class="masters-list" id="masters-list-left">
      <list-item><label slot="name">Yashar Masrouri</label><label slot="id">123456789</label></list-item>
      <list-item><label slot="name">Amin Farzane</label><label slot="id">993456789</label></list-item>
    </div>
    <div class="masters-list" id="masters-list-right">
      <list-item><label slot="name">Mahdi Chavoshi</label><label slot="id">693456789</label></list-item>
      <list-item><label slot="name">Bita Khashechian</label><label slot="id">853456700</label></list-item>
    </div>
    <div id="admin-masters-buttons-div">
      <button class="admin-masters-buttons">Add One</button>
      <button class="admin-masters-buttons">Add Multiple</button>
    </div>

    <!--    <add-one></add-one>-->
    <!--    <add-multiple></add-multiple>-->
    <div id="admin-masters-backdrop"></div>
    <div id="admin-masters-image"></div>
  </div>
</template>

<script>
import ListItem from "@/components/Admin/ListItem";
export default {
  name: "AdminMasters",
  components: { ListItem}
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#admin-masters-container {
  width: 100%;
  height: 100%;
  padding: 64px 0 32px;
  display: grid;
  grid-template-areas:
  'left right'
  'buttons buttons';
  grid-template-rows: 9fr 1fr;
  grid-template-columns: 1fr 1fr;

  .masters-list {
    width: 100%;
    height: 100%;
    padding: 0 64px;
    overflow-y: auto;
  }
  #masters-list-left {
    grid-area: left;
    border-right: 1px solid $color-orange-main;
  }
  #masters-list-right {
    grid-area: right;
    border-left: 1px solid $color-orange-main;
  }
  #admin-masters-buttons-div {
    grid-area: buttons;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-content: center;

    .admin-masters-buttons {
      background: $color-orange-main;
      color: white;
      padding: 0;
      margin: 8px 16px 0;
      border-radius: 30px;
      width: 160px;
    }
    .admin-masters-buttons:hover {
      background: lighten($color-orange-main,5%);
    }
  }

  #admin-masters-backdrop {
    display: none; //none or block
    @include page-backdrop;
  }
  #admin-masters-image {
    background-image: url("./../../assets/AdminMasters.svg");
    @include page-image;
  }
}
@include scrollbar;
</style>