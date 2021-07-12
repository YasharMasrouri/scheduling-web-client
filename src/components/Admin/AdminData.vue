<template>
  <div id="admin-data-container">

    <div class="admin-data-column" id="admin-data-bells">
      <h3>Bells</h3>
      <div class="admin-data-column-content" id="admin-data-bells-content">
        <data-item v-for="bell in bells" :key="bell" @edit="editBell(bell)" @delet="deleteBell(bell)">{{ bell }}</data-item>
      </div>
      <button class="admin-data-add-btn" @click="addBell">Add</button>
    </div>
    <div class="admin-data-column" id="admin-data-day">
      <h3>Day</h3>
      <div class="admin-data-column-content" id="admin-data-day-content">
        <data-item v-for="day in days" :key="day" @edit="editDay(day)" @delet="deleteDay(day)">{{ day }}</data-item>
      </div>
      <button class="admin-data-add-btn" @click="addDay" >Add</button>
    </div>
    <div class="admin-data-column" id="admin-data-courses">
      <h3>Courses</h3>
      <div class="admin-data-column-content" id="admin-data-courses-content">
        <data-item v-for="course in courses" :key="course" @edit="editCourse(course)" @delet="deleteCourse(course)">{{ course }}</data-item>
      </div>
      <button class="admin-data-add-btn" @click="addCourse">Add</button>
    </div>
    <button id="admin-data-generate" @click="generate">Generate Schedule</button>

    <add-course v-show="IsAddCourse" @closeWindow="closeWindow" ref="ac" @saveC="saveC"></add-course>
    <add-day-bell v-show="IsAddDayBell" @closeWindow="closeWindow" ref="adb" @saveDB="saveDB"></add-day-bell>
    <div id="admin-data-backdrop" v-if="IsAddDayBell || IsAddCourse"></div>
    <div id="admin-data-image"></div>
  </div>
</template>

<script>
import DataItem from "./DataItem";
import AddCourse from "./AddCourse";
import AddDayBell from "./AddDayBell";
export default {
  name: "AdminData",
  components: {DataItem , AddCourse , AddDayBell},
  data() {
    return{
      bells : ['8-9' , '9-10' , '10-11' , '11-12' , '12-1' , '1-2' , '2-3' , '3-4' , '4-5' ],
      days : ['saturday' , 'sunday' , 'monday' , 'tuesday' , 'wednesday' , 'thursday' ],
      courses : ['DA' , 'Algebra' , 'logic' , 'Architecture' , 'OS Lab'],
      IsAddCourse : false,
      IsAddDayBell : false,
      check : '',
      proccesing : ''
    }
  },
  methods : {
    addDay(){
      this.$refs.adb.txt = ''
      this.check = ''
      this.proccesing = 'day'
      this.IsAddDayBell = true
    },
    addBell() {
      this.$refs.adb.txt = ''
      this.check = ''
      this.proccesing = 'bell'
      this.IsAddDayBell = true
    },
    addCourse() {
      this.$refs.ac.txt = ''
      this.check = ''
      this.IsAddCourse = true
    },
    closeWindow() {
      this.IsAddCourse = false
      this.IsAddDayBell = false
    },
    generate() {
      // call generate
    },
    editBell(bell) {
      this.addBell()
      this.$refs.adb.txt = bell
      this.check = bell
    },
    deleteBell(bell) {
      const num = this.bells.indexOf(bell)
      this.bells.splice(num , 1)
    },
    editDay(day) {
      this.addDay()
      this.$refs.adb.txt = day
      this.check = day
    },
    deleteDay(day) {
      const num = this.days.indexOf(day)
      this.days.splice(num , 1)
    },
    editCourse(course) {
      this.addCourse()
      this.$refs.ac.txt = course
      this.check = course
    },
    deleteCourse(course) {
      const num = this.courses.indexOf(course)
      this.courses.splice(num , 1)
    },
    saveDB() {
      console.log(this.proccesing)
      // SAVE TO DATABASE
      this.IsAddDayBell = false
      if (this.proccesing === 'bell'){
        const num = this.bells.indexOf(this.check)
        if (num > -1) {
          this.bells[num] = this.$refs.adb.txt
          this.proccesing = ''
        }
        else {
          this.bells.push(this.$refs.adb.txt)
          this.proccesing = ''
        }
      }
      else if(this.proccesing === 'day') {
        const num = this.days.indexOf(this.check)
        if (num > -1) {
          this.days[num] = this.$refs.adb.txt
          this.proccesing = ''
        }
        else {
          this.days.push(this.$refs.adb.txt)
          this.proccesing = ''
        }
      }
    },
    saveC() {
      // SAVE TO DATABASE
      this.IsAddCourse = false
      console.log(this.$refs.ac.txt)
      let num = this.courses.indexOf(this.check)
      if (num > -1) {
        this.courses[num] = this.$refs.ac.txt
        this.check = ''
      }
      else {
        this.courses.push(this.$refs.ac.txt)
        this.check = ''
      }
    }
  }
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
    display: block;
    @include page-backdrop;
  }
  #admin-data-image {
    background-image: url("./../../assets/AdminDatas.svg");
    @include page-image;
  }
}

@include scrollbar
</style>