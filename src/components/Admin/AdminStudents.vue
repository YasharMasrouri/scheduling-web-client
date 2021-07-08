<template>
  <div id="admin-students-container">
    <div class="students-list" id="students-list-left">
      <list-item><label slot="name">Yashar Masrouri</label><label slot="id">123456789</label></list-item>
      <list-item><label slot="name">Amin Farzane</label><label slot="id">993456789</label></list-item>
    </div>
    <div class="students-list" id="students-list-right">
      <list-item><label slot="name">Mahdi Chavoshi</label><label slot="id">693456789</label></list-item>
      <list-item><label slot="name">Bita Khashechian</label><label slot="id">853456700</label></list-item>
    </div>
    <div id="admin-students-buttons-div">
      <button class="admin-student-buttons">Add One</button>
      <button class="admin-student-buttons">Add Multiple</button>
    </div>

    <add-one></add-one>
    <div id="admin-students-backdrop"></div>
    <div id="admin-students-image"></div>
  </div>
</template>

<script>
import ListItem from "@/components/Admin/ListItem";
import AddOne from "@/components/Admin/AddOne";
export default {
  name: "AdminStudents",
  components: {AddOne, ListItem}
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#admin-students-container {
  width: 100%;
  height: 100%;
  padding: 64px 0 32px;
  display: grid;
  grid-template-areas:
  'left right'
  'buttons buttons';
  grid-template-rows: 9fr 1fr;
  grid-template-columns: 1fr 1fr;

  .students-list {
    width: 100%;
    height: 100%;
    padding: 0 64px;
    overflow-y: auto;
  }
  #students-list-left {
    grid-area: left;
    border-right: 1px solid $color-orange-main;
  }
  #students-list-right {
    grid-area: right;
    border-left: 1px solid $color-orange-main;
  }
  #admin-students-buttons-div {
    grid-area: buttons;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-content: center;

    .admin-student-buttons {
      background: $color-orange-main;
      color: white;
      padding: 0;
      margin: 8px 16px 0;
      border-radius: 30px;
      width: 160px;
    }
    .admin-student-buttons:hover {
      background: lighten($color-orange-main,5%);
    }
  }

  #admin-students-backdrop {
    display: block; //none or block
    @include page-backdrop;
  }
  #admin-students-image {
    background-image: url("./../../assets/AdminStudents.svg");
    @include page-image;
  }
}
@include scrollbar;
</style>