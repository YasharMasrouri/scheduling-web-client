<template>
  <div id="master-selected-container">
    <v-layout row class="layout ma-4">

      <v-col class="col" md6>
        <v-row md12 class="centerH mb-5">
          <h4>Bells</h4>
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
    <div id="master-selected-image"></div>
  </div>
</template>

<script>
import BellCourse from "./BellCourse";

export default {
  name: "MasterSelected",
  components: {BellCourse}
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