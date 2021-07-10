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
      <v-checkbox v-if="selectable" class="py-0 pr-2" color="#ED6038" v-model="course.isSelected" />
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