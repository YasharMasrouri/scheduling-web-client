<template>
  <div class="bellCourse my-3">

    <v-card outlined shaped class="card ma-4">
      <v-card-text class="py-1">
        <p class="text-body-1 black--text mb-0 mt-1">
          shanbe
        </p>
        <p class="text-body-1 mb-0 mt-1">
          4-6
        </p>
      </v-card-text>
      <v-checkbox class="checkbox py-0 " color="#ED6038"></v-checkbox>

    </v-card>

  </div>
</template>

<script>
export default {
  name: "BellCourse",

}
</script>

<style scoped>
.bellCourse{
  width: 50%;
  display: grid;
  justify-content: space-evenly;

}

.card{
  display: flex;
  justify-content: center;
  border: 1px solid #ED6038;
  width: 100%;
  height: 80%;

}

.checkbox{
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(+50%,-50%);

}

</style>