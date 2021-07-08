<template>
  <div class="cards py-1 padding">
    <v-card outlined shaped class="centerH margin ma-3">
      <v-card-text class=" text-left py-1">
        <p class="title black--text mb-0 mt-1">title</p>
        <p class="text-body-1  mb-0 mt-1 ">
          master : KK.tanha
        </p>
        <p class="text-body-1 mb-0 mt-1 ">
          Time : seshanbe , 4-6
        </p>
      </v-card-text>
      <v-checkbox class="py-0 pr-2" color="#ED6038"></v-checkbox>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Courses",
}
</script>

<style scoped>
.cards {
  width: 32%;
  display: grid;
  justify-content: space-around;
}

.centerH {
  width: 100%;
  display: flex;
  justify-content: center;
}

.margin {
  margin: 10px;
}

.padding {

  padding-left: 10px;
}
</style>