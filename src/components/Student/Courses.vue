<template>
  <div class="courses pt-3 pl-3">

    <v-card outlined shaped class="card ma-3">
      <v-card-text class=" text-left py-1">
        <p class="title black--text mb-0 mt-1">{{ course.title }}</p>
        <p class="text-body-1  mb-0 mt-1 ">
          master : {{ course.master }}
        </p>

        <p class="text-body-1 mb-0 mt-1 ">
          Time : {{ course.time }}
        </p>

      </v-card-text>
      <!--      <v-checkbox class="checkbox pa-0" color="#ED6038" v-model="course.isSelected" />-->
      <div class="checkDiv" v-if="selectable">
        <input type="checkbox" id="check">
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Courses",
  props: {
    course: {
      type: Object,
      required: true
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

.courses {
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
  height: 32px;
  width: 32px;
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
  font-size: 20px;
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