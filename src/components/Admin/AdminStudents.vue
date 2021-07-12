<template>
  <div id="admin-students-container">
    <div class="students-list" id="students-list-left">
      <list-item v-for="student1 in students1" :key="student1.code" @edit="edit(student1.code , student1.firstName , student1.lastName , student1.password)" @delet="delet(student1.code)"><label slot="name">{{ student1.firstName }} {{ student1.lastName }}</label><label slot="id">{{ student1.code }}</label></list-item>
    </div>
    <div class="students-list" id="students-list-right">
      <list-item v-for="student2 in students2" :key="student2.code" @edit="edit(student2.code , student2.firstName , student2.lastName , student2.password)" @delet="delet(student2.code)"><label slot="name">{{ student2.firstName }} {{ student2.lastName }}</label><label slot="id">{{ student2.code }}</label></list-item>
    </div>
    <div id="admin-students-buttons-div">
      <button class="admin-student-buttons" @click="openAddOne">Add One</button>
      <button class="admin-student-buttons" @click="openAddMultiple">Add Multiple</button>
    </div>

    <div id="admin-students-backdrop" v-show="isAddMultiple || isAddOne" @click="closePopUps"></div>
    <add-one v-show="isAddOne" @closePopUps="closePopUps" ref="addOne" @saveOne="saveOne"></add-one>
    <add-multiple v-show="isAddMultiple" @closePopUps="closePopUps" ref="addMultiple" @saveMultiple="saveMultiple"></add-multiple>
    <div id="admin-students-image"></div>
  </div>
</template>

<script>
import ListItem from "@/components/Admin/ListItem";
import AddOne from "./AddOne";
import AddMultiple from "./AddMultiple";
export default {
  name: "AdminStudents",
  components: {ListItem , AddOne , AddMultiple},
  data() {
    return {
      students : [{firstName : 'mahdi' , lastName : 'chavoshi' , code : 123456789 , password : 'fev56v516'},{firstName : 'bita' , lastName : 'khashechian' ,  code : 987654321 , password : 'fev56v516'},{firstName: 'amin' , lastName : 'farzane' , code : 512364798 , password : 'fev56v516'}],
      students1 : [],
      students2 : [],
      isAddOne : false,
      isAddMultiple : false,
      editAction : false,
      editCode : 0,
      add : true
    }
  },
  methods : {
    openAddOne() {
      this.editAction = false
      this.isAddOne = true
      console.log("one")
    },
    openAddMultiple() {
      this.editAction = false
      this.isAddMultiple = true
    },
    closePopUps() {
      this.isAddOne = false
      this.isAddMultiple =false
      this.editAction = false
      this.$refs.addOne.code = ''
      this.$refs.addOne.password = ''
      this.$refs.addOne.lastName = ''
      this.$refs.addOne.firstName = ''
      this.$refs.addMultiple.code = ''
      this.$refs.addMultiple.password = ''
      this.$refs.addMultiple.lastName = ''
      this.$refs.addMultiple.firstName = ''
    },
    edit(code , firstName , lastName , password) {
      this.editCode = code
      this.openAddOne()
      this.editAction = true
      this.$refs.addOne.code = code
      this.$refs.addOne.firstName = firstName
      this.$refs.addOne.lastName = lastName
      this.$refs.addOne.password = password
    },
    delet(code) {
      let num = this.students1.findIndex(student => student.code === code)
      if(num > -1){
        this.students1.splice(num , 1)
      }
      else{
        num = this.students2.findIndex(student => student.code === code)
        this.students2.splice(num , 1)
      }
    },
    saveMultiple() {
      for (let i = 0 ; i < this.$refs.addMultiple.list.length ; i++){
        if (this.add){
          this.students2.push(this.$refs.addMultiple.list[i])
          this.add = false
        }
        else {
          this.students1.push(this.$refs.addMultiple.list[i])
          this.add = true
        }
      }
      this.$refs.addMultiple.list = []
      this.closePopUps()
    },
    saveOne() {
      // save to server left
      if (this.editAction === true) {
        let num = this.students1.findIndex(student => student.code === this.editCode)
        if(num > -1){
          this.students1[num].code = this.$refs.addOne.code
          this.students1[num].firstName = this.$refs.addOne.firstName
          this.students1[num].lastName = this.$refs.addOne.lastName
          this.students1[num].password = this.$refs.addOne.password
          this.editAction = false
        }
        else{
          num = this.masters2.findIndex(master => master.code === this.editCode)
          this.students2[num].code = this.$refs.addOne.code
          this.students2[num].firstName = this.$refs.addOne.firstName
          this.students2[num].lastName = this.$refs.addOne.lastName
          this.students2[num].password = this.$refs.addOne.password
          this.editAction = false
        }
      }
      else {
        const student = {
          firstName : this.$refs.addOne.firstName,
          lastName : this.$refs.addOne.lastName,
          code : this.$refs.addOne.code,
          password : this.$refs.addOne.password
        }
        if (this.add) {
          this.students1.push(student)
          this.add = false
        }
        else {
          this.students2.push(student)
          this.add = true
        }
      }
      this.closePopUps()
    }
  },
  beforeMount() {
    //fetch
    const num = Math.round(this.students.length/2)
    this.students1 = this.students.slice(0 , num)
    this.students2 = this.students.slice(num ,this.students.length)
  }
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#admin-students-container {
  width: 100%;
  height: 100%;
  padding: 64px 0 32px;
  display: grid;
  grid-template-areas:
  'left right'
  'buttons buttons';
  grid-template-rows: 9fr 1fr;
  grid-template-columns: 1fr 1fr;

  .students-list {
    width: 100%;
    height: 100%;
    padding: 0 64px;
    overflow-y: auto;
  }
  #students-list-left {
    grid-area: left;
    border-right: 1px solid $color-orange-main;
  }
  #students-list-right {
    grid-area: right;
    border-left: 1px solid $color-orange-main;
  }
  #admin-students-buttons-div {
    grid-area: buttons;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-content: center;

    .admin-student-buttons {
      background: $color-orange-main;
      color: white;
      padding: 0;
      margin: 8px 16px 0;
      border-radius: 30px;
      width: 160px;
    }
    .admin-student-buttons:hover {
      background: lighten($color-orange-main,5%);
    }
  }

  #admin-students-backdrop {
    display: block; //none or block
    @include page-backdrop;
  }
  #admin-students-image {
    background-image: url("./../../assets/AdminStudents.svg");
    @include page-image;
  }
}
@include scrollbar;
</style>