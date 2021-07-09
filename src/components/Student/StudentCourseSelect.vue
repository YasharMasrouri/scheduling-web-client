<template>
  <div id="student-course-container">
    <div class="theGrid">
      <div>
        <div class="search ml-auto mr-auto">
          <input type="text" class="searchTerm title" placeholder="Search by course name..." v-model="searchText">
          <button type="submit" class="searchButton" @click="search">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>

      <div class="scroll">
        <div class="pl-5">
          <v-row>
            <courses v-for="course in resultCourses" :key="course.id" :course="course"/>
          </v-row>
        </div>
      </div>
      <div class="text-center">
        <v-btn large rounded elevation="2" color="#ED6038" class="saveBtn white--text text-capitalize text-h5">save
        </v-btn>
      </div>
    </div>

    <div id="student-page-image"></div>
  </div>
</template>

<script>
import Courses from "@/components/Student/Courses";

export default {
  name: "StudentCourseSelect",
  components: {Courses,},
  data() {
    return {
      courses: [
        {
          id: 0,
          title: "Yallah kishi yoxsan hesh",
          master: "Juvan",
          time: "bidana time",
          isSelected: true
        },
        {
          id: 1,
          title: "Yallah kishi yoxsan hesh",
          master: "Juvan",
          time: "bidana time",
          isSelected: false
        },
        {
          id: 2,
          title: "Yallah kishi yoxsan hesh",
          master: "Juvan",
          time: "bidana time",
          isSelected: false
        },
        {
          id: 3,
          title: "Yallah kishi yoxsan hesh",
          master: "Juvan",
          time: "bidana time",
          isSelected: false
        },
        {
          id: 4,
          title: "Yallah kishi yoxsan hesh",
          master: "Juvan",
          time: "bidana time",
          isSelected: false
        },
      ],
      searchText: '',
      hasSearched: false
    }
  },
  computed: {
    resultCourses() {
      return this.hasSearched ?
          this.courses.filter(course => course.title.test(`*.${this.searchText}*.`)) :
          this.courses
    }
  },
  methods: {
    save() {
      const selectedCourses = this.courses.filter(course => course.isSelected)
      if (selectedCourses.length > 0) {
        // TODO save this courses for student in database
      }
    },
    search() {
      this.hasSearched = this.searchText.length !== 0
    }
  }
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