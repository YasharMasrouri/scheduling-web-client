<template>
  <div class="bellCourse my-3">

    <v-card outlined shaped class="card ma-4">
      <v-card-text class="py-1">
        <p class="text-body-1 black--text mb-0 mt-1">
          {{ day }}
        </p>
        <p class="text-body-1 mb-0 mt-1">
          {{ bell }}
        </p>
      </v-card-text>
      <div class="checkDiv" v-if="selectable">
        <input type="checkbox" id="check">
      </div>
    </v-card>

  </div>
</template>

<script>
export default {
  name: "BellCourse",
  props: {
    day: {
      type: String,
      required: true,
      default : ''
    },
    bell: {
      type: String,
      required: true,
      default : ''
    },
    selectable: {
      type: Boolean,
      required: false,
      default: true
    }
  }

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

.checkDiv{
  height: 50px;
  width: 50px;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(+60%, -20%);

}

input[type="checkbox"] {
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 1px solid #454141;
  display: flex;
  justify-content: center;
  align-items: center;
}

input[type="checkbox"]:after {
  font-family: "Font Awesome 5 Pro";
  font-weight: 900;
  content: "\f00c";
  font-size: 18px;
  display: none;
  color: #ffffff;
}

input[type="checkbox"]:hover {
  background-color: #EFEFEFF4;
}

input[type="checkbox"]:checked {
  background-color: #ED6038;
  border: none;
}

input[type="checkbox"]:checked:after {
  display: block;
}

</style>