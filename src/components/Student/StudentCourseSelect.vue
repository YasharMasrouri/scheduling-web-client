<template>
  <div id="student-course-container">
    <div class="theGrid">
      <search>
        <div class="search ml-auto mr-auto">
          <input type="text" class="searchTerm title" placeholder="Search by course name...">
          <button type="submit" class="searchButton">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </search>

      <middle class="scroll">
        <div class="pl-5">
          <v-row>
            <Courses/>
            <Courses/>
            <Courses/>
            <Courses/>
            <Courses/>
            <Courses/>
            <Courses/>
            <Courses/>
            <Courses/>
            <Courses/>


          </v-row>
        </div>
      </middle>
      <btn class="text-center">
        <v-btn large rounded elevation="2" color="#ED6038" class="saveBtn white--text text-capitalize text-h5">save
        </v-btn>
      </btn>
    </div>

    <div id="student-page-image"></div>
  </div>
</template>

<script>
import Courses from "@/components/Student/Courses";

export default {
  name: "StudentCourseSelect",
  components: {Courses,}
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#student-course-container {
  width: 100%;
  height: 100%;
  @include flex-center;

  .theGrid {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-areas: 'search' 'middle' 'btn';
    grid-template-rows: 15% 75% 10%;
    grid-template-columns: 100%;
    align-items: center;
  }

  .saveBtn {
    margin-top: 15px;
    width: 15%;
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
    width: 100%;
    height: 90%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
}

#student-page-image {
  background-image: url("./../../assets/StudentCourses.svg");
  @include page-image;
}
</style>