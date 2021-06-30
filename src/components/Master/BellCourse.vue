<template>
  <div class="page">
    <div class="TheContainer pa-4 text-center d-flex">

      <v-layout row class="ma-3">

        <v-col class="col" md6>
          <v-row md12 class="d-flex justify-center mb-5">
            <h4>Bells</h4>
          </v-row>

          <div class="scroll pa-4">
            <v-row>
              <div v-for="bell in bells" :key="bell.no" class="cards py-0">
                <v-card  outlined shaped class="d-flex justify-center ma-3">
                  <v-card-text class="py-0">
                    <p class="text-body-1 black--text mb-0 mt-1">
                      {{ bell.day }}
                    </p>
                    <p class="text-body-1 mb-0 mt-1">
                      {{ bell.time }}
                    </p>
                  </v-card-text>
                  <v-checkbox class="py-0" color="#ED6038"></v-checkbox>
                </v-card>
              </div>
            </v-row>
          </div>
        </v-col>

        <v-divider vertical inset color="#ED6038"></v-divider>

        <v-col class="col" md6>
          <v-row md12 class="d-flex justify-center mb-5">
            <h4>Cource</h4>
          </v-row>

          <div class="scroll pa-4">
            <v-row>
              <div v-for="bell in bells" :key="bell.no" class="cards py-0">
                <v-card  outlined shaped class="d-flex justify-center ma-3">
                  <v-card-text class="py-0 d-flex justify-center align-center">
                    <p class="text-body-1 black--text mb-0 mt-1">
                      {{ bell.day }}
                    </p>
                  </v-card-text>
                  <v-checkbox class="py-0" color="#ED6038"></v-checkbox>
                </v-card>
              </div>
            </v-row>
          </div>
        </v-col>

        <v-flex sm12 class="d-flex justify-center">
          <v-btn rounded elevation="2" color="#ED6038" class="saveBtn white--text text-capitalize font-weight-medium body-1 ">save</v-btn>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  name: "BellCourse",

  data() {
    return {
      bells: [
        {day: "shanbe", time: "4-5", no: 1},
        {day: "shanbe", time: "4-5", no: 2},
        {day: "shanbe", time: "4-5", no: 3},
        {day: "shanbe", time: "4-5", no: 4},
        {day: "shanbe", time: "4-5", no: 5},
        {day: "shanbe", time: "4-5", no: 6},
        {day: "shanbe", time: "4-5", no: 7},
        {day: "shanbe", time: "4-5", no: 8},
        {day: "shanbe", time: "4-5", no: 9},
      ],
    };
  }
}
</script>

<style scoped>
.page {
  background-color:  #E3EFF6;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.TheContainer {
  border-radius: 30px;
  background-color: #ffffff;
  width: 70vw;
  height: 70vh;
  display: flex;
  justify-content: center;
}

.col {
  height:90%;
}

.scroll {
  height: 80%;
  overflow-y: scroll;
}

.cards{
  width: 50%;
  display: grid;
  justify-content: space-around;

}

.saveBtn{
  margin-top:15px;
  width: 20%;
}
</style>