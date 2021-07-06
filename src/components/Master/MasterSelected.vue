<template>
  <the-container>
    <v-layout row class="layout ma-4">

      <v-col class="col" md6>
        <v-row md12 class="centerH mb-5">
          <h4>Bells</h4>
        </v-row>

        <div class="scroll pa-4">
          <v-row>
            <BellCourse />
            <BellCourse />
            <BellCourse />
            <BellCourse />
            <BellCourse />
            <BellCourse />
            <BellCourse />
            <BellCourse />

          </v-row>
        </div>
      </v-col>

      <v-divider vertical  color="#ED6038"></v-divider>

      <v-col class="col" md6>
        <v-row md12 class="centerH mb-5">
          <h4>Course</h4>
        </v-row>

        <div class="scroll pa-4">
          <v-row>
            <BellCourse/>
            <BellCourse/>
            <BellCourse/>
            <BellCourse/>
            <BellCourse/>
            <BellCourse/>
            <BellCourse/>
            <BellCourse/>
            <BellCourse/>
            <BellCourse/>

          </v-row>
        </div>
      </v-col>

    </v-layout>
  </the-container>
</template>

<script>
import TheContainer from "../Common/TheContainer";
import BellCourse from "./BellCourse";
export default {
  name: "MasterSelected",
  components: {TheContainer,BellCourse}
}
</script>

<style scoped>
.col {
  height:80%;
  margin-top: 20px;
}

.scroll {
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-top: 20px;
  padding: 10px;

}

.centerH{
  display: flex;
  justify-content: center;
}

.layout{
  padding-top:20px;
  padding-bottom:20px;

}
</style>