<template>
  <div class="courses pt-3 pl-3">

    <v-card outlined shaped class="card ma-3">
      <v-card-text class=" text-left py-1">
        <p class="title black--text mb-0 mt-1">title</p>

        <p class="text-body-1  mb-0 mt-1 ">
          master : KK.tanha
        </p>

        <p class="text-body-1 mb-0 mt-1 ">
          Time : seshanbe , 4-6
        </p>

      </v-card-text>
      <v-checkbox class="checkbox pa-0" color="#ED6038"></v-checkbox>

    </v-card>
  </div>
</template>

<script>
export default {
  name: "Courses",
}
</script>

<style scoped>
.courses{
  width: 32%;
  display: grid;
  justify-content: space-around;

}

.card {
  width: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid #ED6038;
  position: relative;
}

.checkbox{
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(+50%,-50%);

}


</style>