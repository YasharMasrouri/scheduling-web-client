<template>
  <div id="m-a-announcements-container">
    <div id="m-a-announcements">
      <announcements>
        <span slot="title">Title</span>
        <span slot="date">00/03/25</span>
        <span slot="text">Announcement one</span>
      </announcements>
      <announcements>
        <span slot="title">Title</span>
        <span slot="date">00/03/27</span>
        <span slot="text">
        "Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum."
      </span>
      </announcements>
    </div>
    <div id="m-a-announcements-btn-div">
      <button id="m-a-announcements-btn">Add Announcement</button>
    </div>

    <add-announcement></add-announcement>

    <div id="m-a-announcements-backdrop"></div>
    <div id="m-a-announcements-image"></div>
  </div>
</template>

<script>
import Announcements from "@/components/Common/Announcements";
import AddAnnouncement from "@/components/Common/AddAnnouncement";

export default {
  name: "MAAnnouncements",
  components: {AddAnnouncement, Announcements}
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#m-a-announcements-container {
  width: 100%;
  height: 100%;
  padding: 16px 32px;

  #m-a-announcements {
    width: 100%;
    height: 88%;
    overflow-y: auto;
  }
  #m-a-announcements-btn-div {
    height: 10%;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: flex-end;

    #m-a-announcements-btn {
      padding: 10px 21px;
      background: $color-orange-main;
      color: white;
      border-radius: 30px;
    }
    #m-a-announcements-btn:hover {
      background: lighten($color-orange-main,5%);
    }
  }

  #m-a-announcements-backdrop {
    display: block; //none or block
    @include page-backdrop;
  }
  #m-a-announcements-image {
    background-image: url("./../../assets/Announcements.svg");
    @include page-image;
  }
}
@include scrollbar
</style>