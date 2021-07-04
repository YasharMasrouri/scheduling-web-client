<template>
  <div id="admin-students-container">
    <div class="students-list" id="students-list-left"></div>
    <div class="students-list" id="students-list-right"></div>
    <div id="admin-students-buttons-div">
      <button class="admin-student-buttons">Add One</button>
      <button class="admin-student-buttons">Add Multiple</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminStudents",
  components: {}
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#admin-students-container {
  width: 100%;
  height: 100%;
  padding: 32px 64px;
  display: grid;
  grid-template-areas:
  'left right'
  'buttons buttons';
  grid-template-rows: 9fr 1fr;
  grid-template-columns: 1fr 1fr;

  .students-list {

  }
  #students-list-left {grid-area: left}
  #students-list-right {grid-area: right}
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
      margin: 4px 8px;
      border-radius: 30px;
      width: 160px;
    }
  }
}
</style>