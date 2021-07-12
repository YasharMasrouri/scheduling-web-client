<template>
  <div id="master-selected-container">
    <v-layout row class="layout ma-4">

      <v-col class="col" md6>
        <v-row md12 class="centerH mb-5">
          <h4>Bells</h4>
        </v-row>

        <div class="scroll pa-4">
          <v-row>
            <bell-course v-for="bell in bells" :key="bell.bell" :day="bell.day" :bell="bell.bell" :selectable="false"></bell-course>

          </v-row>
        </div>
      </v-col>

      <v-divider vertical color="#ED6038"></v-divider>

      <v-col class="col" md6>
        <v-row md12 class="centerH mb-5">
          <h4>Course</h4>
        </v-row>

        <div class="scroll pa-4">
          <v-row>
            <bell-course v-for="course in courses" :key="course.name" :day="course.name" :bell="course.units" :selectable="false"></bell-course>

          </v-row>
        </div>
      </v-col>

    </v-layout>
    <div id="master-selected-image"></div>
  </div>
</template>

<script>
import BellCourse from "./BellCourse";

export default {
  name: "MasterSelected",
  components: {BellCourse},
  data() {
    return {
      courses : [{name : 'DA' , units : '5'},{name : 'DA' , units : '5'},{name : 'DA' , units : '5'},{name : 'DA' , units : '5'},{name : 'DA' , units : '5'},{name : 'DA' , units : '5'},{name : 'DA' , units : '5'}],
      bells : [{day : "sunday" , bell : "5-6"},{day : "sunday" , bell : "5-6"},{day : "sunday" , bell : "5-6"},{day : "sunday" , bell : "5-6"},{day : "sunday" , bell : "5-6"},{day : "sunday" , bell : "5-6"}]
    }
  }
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#master-selected-container {
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

  .centerH {
    display: flex;
    justify-content: center;
  }

  .layout {
    padding-top: 20px;
    padding-bottom: 20px;
  }
}

#master-selected-image {
  background-image: url("./../../assets/MasterSelected.svg");
  @include page-image;
}
</style>