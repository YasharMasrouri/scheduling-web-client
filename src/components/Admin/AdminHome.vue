<template>
  <div id="admin-home-container">
    <table>
      <tr>
        <th>Day / bell</th>
        <th v-for="bell in bells" :key="bell">{{ bell }}</th>
      </tr>
      <tr v-for="day in days" :key="day">
        <td>{{ day }}</td>
        <td v-for="bell in bells" :key="bell"><button @click="showBell(day , bell)"><i class="fal fa-angle-down"></i></button></td>
      </tr>
    </table>
    <div id="admin-home-backdrop" v-if="IsCellVisible" @click="closeItem"></div>
    <table-cell :day=itemDay :bell=itemBell v-if="IsCellVisible" @closeItem="closeItem"></table-cell>
    <div id="admin-home-image"></div>
  </div>
</template>

<script>
import TableCell from "@/components/Admin/TableCell";
export default {
  name: "AdminHome",
  components: {TableCell},
  data() {
    return {
      bells : ['8-9' , '9-10' , '10-11' , '11-12' , '12-1' , '1-2' , '2-3' , '3-4' , '4-5' ],
      days : ['saturday' , 'sunday' , 'monday' , 'tuesday' , 'wednesday' , 'thursday' ],
      IsCellVisible : false,
      itemDay : "",
      itemBell : "",
    }
  },
  beforeMount() {
    // fetch(this.$store.state.ServerUrl + "/api/Bells", {
    //   method: "GET",
    // }).then(response => {
    //   if (response.ok) {
    //     return response.json()
    //   }
    // }).then(json =>{
    //   this.bells  = []
    //   for (let i = 0 ; i < json.list.length ; i++) {
    //     this.bells.push(json.list[i].label)
    //   }
    // })
    // fetch(this.$store.state.ServerUrl + "/api/Days", {
    //   method: "GET",
    // }).then(response => {
    //   if (response.ok) {
    //     return response.json()
    //   }
    // }).then(json =>{
    //   this.days  = []
    //   for (let i = 0 ; i < json.list.length ; i++) {
    //     this.days.push(json.list[i].label)
    //   }
    // })
  },
  methods : {
    showBell(day , bell) {
      this.itemBell = bell
      this.itemDay = day
      this.IsCellVisible = true
    },
    closeItem(){
      this.IsCellVisible = false
    }
  }
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#admin-home-container{
  width: 100%;
  height: 100%;
  @include flex-center;

  table {
    border-collapse: collapse;
    width: 80%;
    height: 80%;
  }
  th, td {
    //padding: 8px;
    text-align: center;
    border-bottom: 1px solid $color-blue-table;
    width: calc(100%/10);
    height: calc (100%/7);
  }
  td {
    button {
      width: 100%;
      height: 100%;
      i {font-size: 14pt;}
    }
    button:hover {
      i {font-weight: bold;}
    }
  }

  #admin-home-backdrop {
    @include page-backdrop;
  }

  #admin-home-image {
    background-image: url("./../../assets/StudentHome.svg");
    @include page-image;
  }
}
</style>