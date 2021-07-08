<template>
  <div class="cards py-0">
    <v-card outlined shaped class="centerH margin ma-3">
      <v-card-text class=" py-0">
        <p class="text-body-1 black--text mb-0 mt-1">
          shanbe
        </p>
        <p class="text-body-1 mb-0 mt-1">
          4-6
        </p>
      </v-card-text>
      <v-checkbox class="py-0" color="#ED6038"></v-checkbox>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "BellCourse",

}
</script>

<style scoped>
.cards {
  width: 50%;
  display: grid;
  justify-content: space-evenly;

}

.centerH {
  display: flex;
  justify-content: center;
}

.margin {
  margin: 10px;
}

</style>