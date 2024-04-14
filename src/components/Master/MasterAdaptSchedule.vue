<template>
  <div id="master-schedule-container">
    <v-layout row class="layout ma-4">

      <v-col class="col" md6>
        <v-row md12 class="centerH mb-5">
          <h4>Bells</h4>
        </v-row>

        <div class="scroll pa-4">
          <v-row>
            <bell-course v-for="bell in bells" :key="bell.bell" :day="bell.day" :bell="bell.bell" ></bell-course>

          </v-row>
        </div>
      </v-col>

      <v-divider vertical inset color="#ED6038"></v-divider>

      <v-col class="col" md6>
        <v-row md12 class="centerH mb-5">
          <h4>Course</h4>
        </v-row>

        <div class="scroll pa-4">
          <v-row>
            <bell-course v-for="course in courses" :key="course.name" :day="course.name" :bell="course.units"></bell-course>

          </v-row>
        </div>
      </v-col>

      <v-flex sm12 class="centerH ">
        <v-btn large rounded elevation="2" color="#ED6038"
               class="saveBtn white--text text-capitalize font-weight-regular subtitle-1 ">save
        </v-btn>
      </v-flex>
    </v-layout>

    <div id="master-schedule-image"></div>
  </div>

</template>

<script>
import BellCourse from "./BellCourse";

export default {
  name: "MasterAdaptSchedule",
  components: {BellCourse},
  data() {
    return {
      courses : [{name : 'DA' , units : '5'},{name : 'DA' , units : '5'},{name : 'DA' , units : '5'},{name : 'DA' , units : '5'},{name : 'DA' , units : '5'},{name : 'DA' , units : '5'},{name : 'DA' , units : '5'}],
      bells : [{day : "sunday" , bell : "5-6"},{day : "sunday" , bell : "5-6"},{day : "sunday" , bell : "5-6"},{day : "sunday" , bell : "5-6"},{day : "sunday" , bell : "5-6"},{day : "sunday" , bell : "5-6"},{day : "sunday" , bell : "5-6"},{day : "sunday" , bell : "5-6"},{day : "sunday" , bell : "5-6"},{day : "sunday" , bell : "5-6"},{day : "sunday" , bell : "5-6"}]
    }
  }
}
</script>


<style scoped lang="scss">
@import "./../../../public/-variables";

#master-schedule-container {
  width: 100%;
  height: 100%;
  @include flex-center;

  .col {
    height: 80%;
    margin-top: 20px;
  }

  .scroll {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    margin-top: 20px;
    padding: 10px;
  }


  .saveBtn {
    margin-top: 15px;
    width: 20%;
    height: 100%;
    color: white;
  }

  .centerH {
    display: flex;
    justify-content: center;
  }

  .centerV {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .layout {
    padding-top: 20px;
    height: 90%;
    width: 100%;
    flex-wrap: wrap;
  }

  .margin {
    margin: 10px;
  }
}

#master-schedule-image {
  background-image: url("./../../assets/MasterAdaptSchedule.svg");
  @include page-image;
}

</style>