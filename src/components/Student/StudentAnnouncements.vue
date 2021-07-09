<template>
  <div id="student-announce-container">
    <div class="theGrid">
      <div>
        <div class="search ml-auto mr-auto">
          <input type="text" class="searchTerm title" placeholder="Search by course name...">
          <button type="submit" class="searchButton">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>

      <div class="scroll ann">
        <the-announcement  v-for="announcement in announcements" :key="announcement.id" :editable="false">
          <span slot="title">{{ announcement.title }}</span>
          <span slot="date">{{ announcement.dateTime }}</span>
          <span slot="text">{{ announcement.description }}</span>
        </the-announcement>
      </div>
    </div>
    <div id="student-announce-image"></div>
  </div>
</template>

<script>
import TheAnnouncement from "@/components/Common/TheAnnouncement";
export default {
  name: "StudentAnnouncements",
  components: {TheAnnouncement},
  data() {
    return {
      announcements: [
        {
          id: 0,
          title: 'yallah kishi yoxsan hesh',
          description: 'janivi yiyaram daw mn',
          dateTime: Date.now()
        },
        {
          id: 1,
          title: 'nokaram',
          description: 'bashiva dolannam',
          dateTime: Date.now()
        },
        {
          id: 2,
          title: 'golhovallahol ahad',
          description: 'allahossamad',
          dateTime: Date.now()
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#student-announce-container {
  width: 100%;
  height: 100%;
  @include flex-center;

  .theGrid {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-areas: 'search' 'middle';
    grid-template-rows: 15% 85%;
    grid-template-columns: 100%;
    align-items: center;
  }

  .search {
    width: 40%;
    display: flex;
  }

  .searchTerm {
    width: 100%;
    border: 3px solid #ED6038;
    border-right: none;
    padding: 10px;
    height: 100%;
    border-radius: 30px 0 0 30px;
    outline: none;
  }

  .searchButton {
    width: 15%;
    border: 1px solid #ED6038;
    background: #ED6038;
    text-align: center;
    color: #ffffff;
    border-radius: 0 30px 30px 0;
    cursor: pointer;
    font-size: 20px;
  }

  .scroll {
    width: 99%;
    height: 90%;
    z-index: 100;
    padding-left: 20px;
    padding-right: 10px;
    overflow-y: scroll;
    overflow-x: hidden;
  }

}

#student-announce-image {
  background-image: url("./../../assets/Announcements.svg");
  @include page-image;
}
</style>