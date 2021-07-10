<template>
  <div id="m-a-announcements-container">
    <div id="m-a-announcements">
      <the-announcement v-for="announcement in announcements" :key="announcement.id" @deleteAnnouncement="deleteAnnouncement(announcement.id)">
        <span slot="title">{{ announcement.title }}</span>
        <span slot="date">{{ announcement.date }}</span>
        <span slot="text">{{ announcement.message }}</span>
      </the-announcement>
    </div>
    <div id="m-a-announcements-btn-div">
      <button id="m-a-announcements-btn" @click="openPopUp">Add Announcement</button>
    </div>


    <div id="m-a-announcements-backdrop" v-show="isAddAnnouncement" @click="closePopUp"></div>
    <add-announcement v-show="isAddAnnouncement" ref="addAnnouncement" @saveAnnouncement="saveAnnouncement" @closePopUp="closePopUp"></add-announcement>
    <div id="m-a-announcements-image"></div>
  </div>
</template>

<script>
import TheAnnouncement from "@/components/Common/TheAnnouncement";
import AddAnnouncement from "./AddAnnouncement";
export default {
  name: "MAAnnouncements",
  components: {TheAnnouncement , AddAnnouncement},
  data() {
    return {
      isAddAnnouncement : false,
      announcements : [{id: 0 ,title : 'Offline' , subject : 'DA' , date : '1400/4/20', message : 'Lorem ipsum dolor sit amet,\n' +
            '        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
            '        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n' +
            '        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n' +
            '        Excepteur sint occaecat cupidatat non proident,\n' +
            '        sunt in culpa qui officia deserunt mollit anim id est laborum.'} , {id: 1 ,title : 'Offline' , subject : 'Algebra' , date : '1400/4/20', message : 'Lorem ipsum dolor sit amet,\n' +
            '        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
            '        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n' +
            '        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n' +
            '        Excepteur sint occaecat cupidatat non proident,\n' +
            '        sunt in culpa qui officia deserunt mollit anim id est laborum.'} , {id: 2 ,title : 'Offline' , subject : 'Programming' , date : '1400/4/20', message : 'Lorem ipsum dolor sit amet,\n' +
            '        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
            '        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n' +
            '        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n' +
            '        Excepteur sint occaecat cupidatat non proident,\n' +
            '        sunt in culpa qui officia deserunt mollit anim id est laborum.'}]
    }
  },
  methods : {
    deleteAnnouncement(id) {
      const num = this.announcements.findIndex(announcement => announcement.id == id)
      this.announcements.splice(num , 1)
      // delete from database
    },
    saveAnnouncement(){
      let id = 0
      if(this.announcements.length > 0) {
        id = this.announcements[this.announcements.length-1].id + 1
      }
      const announcement = {
        id : id,
        title : this.$refs.addAnnouncement.title,
        subject : this.$refs.addAnnouncement.title,
        date : this.$refs.addAnnouncement.date,
        message : this.$refs.addAnnouncement.description
      }
      this.announcements.push(announcement)
      //save to database
      this.closePopUp()
    },
    openPopUp() {
      this.isAddAnnouncement = true
    },
    closePopUp() {
      this.$refs.addAnnouncement.date = ''
      this.$refs.addAnnouncement.description = ''
      this.$refs.addAnnouncement.title = ''
      this.isAddAnnouncement = false
    }
  }
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