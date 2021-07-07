<template>
  <TheContainer >


      <middle class="scroll">
        <div class="pl-5">
          <v-row>
            <Courses />
            <Courses />
            <Courses />
            <Courses />
            <Courses />
            <Courses />
            <Courses />
            <Courses />
            <Courses />
            <Courses />


          </v-row>
        </div>
      </middle>

  </TheContainer>
</template>

<script>
import TheContainer from "../Common/TheContainer";
import Courses from "./Courses";
export default {
  name: "StudentSelected",
  components: {TheContainer,Courses}
}
</script>

<style scoped>

.scroll {
  width: 100%;
  height: 90%;
  overflow-y: scroll;
  overflow-x: hidden;
  margin: 20px;
  padding: 20px;
}
</style>