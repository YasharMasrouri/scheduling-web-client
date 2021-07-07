<template>
  <TheContainer>
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

      <v-divider vertical inset color="#ED6038"></v-divider>

      <v-col class="col" md6>
        <v-row md12 class="centerH mb-5">
          <h4>Cource</h4>
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

          </v-row>
        </div>
      </v-col>

      <v-flex sm12 class="centerH ">
        <v-btn large rounded elevation="2" color="#ED6038" class="saveBtn white--text text-capitalize font-weight-regular subtitle-1 ">save</v-btn>
      </v-flex>
    </v-layout>
  </TheContainer>
</template>

<script>
import TheContainer from "../Common/TheContainer";
import BellCourse from "./BellCourse";
export default {
  name: "MasterAdaptSchedule",
  components: {BellCourse, TheContainer},
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



.saveBtn{
  margin-top:15px;
  width: 20%;
  height: 15%;
  color: white;

}

.centerH{
  display: flex;
  justify-content: center;
}

.centerV{
  display: flex;
  justify-content: center;
  align-items: center;
}

.layout{
  padding-top:20px;
}

.margin{
  margin: 10px;
}
</style>