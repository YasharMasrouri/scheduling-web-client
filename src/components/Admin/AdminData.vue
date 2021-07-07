<template>
  <div id="admin-data-container">

    <div class="admin-data-column" id="admin-data-bells">
      <h3>Bells</h3>
      <div class="admin-data-column-content" id="admin-data-bells-conten">
        <data-item>4-5</data-item>
        <data-item>5-6</data-item>
        <data-item>6-7</data-item>
        <data-item>7-8</data-item>
      </div>
      <button class="admin-data-add-btn">Add</button>
    </div>
    <div class="admin-data-column" id="admin-data-day">
      <h3>Day</h3>
      <div class="admin-data-column-content" id="admin-data-day-content">
        <data-item>Saturday</data-item>
        <data-item>Monday</data-item>
      </div>
      <button class="admin-data-add-btn">Add</button>
    </div>
    <div class="admin-data-column" id="admin-data-courses">
      <h3>Courses</h3>
      <div class="admin-data-column-content" id="admin-data-courses-content">
        <data-item>Maths</data-item>
        <data-item>Algorithms</data-item>
      </div>
      <button class="admin-data-add-btn">Add</button>
    </div>
    <button id="admin-data-generate">Generate Schedule</button>

<!--    <add-course></add-course>-->
<!--    <add-day-bell></add-day-bell>-->
    <div id="admin-data-backdrop"></div>
    <div id="admin-data-image"></div>
  </div>
</template>

<script>
import DataItem from "@/components/Admin/DataItem";
export default {
  name: "AdminData",
  components: {DataItem}
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#admin-data-container {
  width: 100%;
  height: 100%;
  padding: 32px 64px;
  display: grid;
  grid-template-areas:
  'bells day courses'
  'empty empty generate';
  grid-template-rows: 9fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;

  .admin-data-column {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 0.7fr 6.3fr 1fr;
    text-align: center;
    overflow-y: auto;

    .admin-data-column-content {
      height: 100%;
      width: 100%;
      padding: 8px 16px;
      overflow-y: auto;
    }
    .admin-data-add-btn {
      background: $color-orange-main;
      color: white;
      border-radius: 30px;
      margin: 12px 84px;
    }
    .admin-data-add-btn:hover {
      background: lighten($color-orange-main,5%);
    }
  }

  #admin-data-bells {
    grid-area: bells;
  }
  #admin-data-day {
    grid-area: day;
    border-right: 1px solid;
    border-left: 1px solid;
  }
  #admin-data-courses {
    grid-area: courses;
  }
  #admin-data-generate {
    grid-area: generate;
    background: $color-blue-btn;
    color: white;
    border-radius: 30px;
    margin: 16px 64px 0;
  }
  #admin-data-generate:hover {
    background: lighten($color-blue-btn,5%);
  }

  #admin-data-backdrop {
    display: none; //none or block
    @include page-backdrop;
  }
  #admin-data-image {
    background-image: url("./../../assets/AdminDatas.svg");
    @include page-image;
  }
}

@include scrollbar
</style>