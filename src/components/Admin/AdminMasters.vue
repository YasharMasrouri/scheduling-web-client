<template>
  <div id="admin-masters-container">
    <div class="masters-list" id="masters-list-left">
      <list-item v-for="master1 in masters1" :key="master1.code" @edit="edit(master1.code , master1.firstName , master1.lastName , master1.password)" @delet="delet(master1.code)"><label slot="name">{{ master1.firstName }} {{ master1.lastName }}</label><label slot="id">{{ master1.code }}</label></list-item>
    </div>
    <div class="masters-list" id="masters-list-right">
      <list-item v-for="master2 in masters2" :key="master2.code" @edit="edit(master2.code , master2.firstName , master2.lastName , master2.password)" @delet="delet(master2.code)"><label slot="name">{{ master2.firstName }} {{ master2.lastName }}</label><label slot="id">{{ master2.code }}</label></list-item>
    </div>
    <div id="admin-masters-buttons-div">
      <button class="admin-masters-buttons" @click="openAddOne">Add One</button>
      <button class="admin-masters-buttons" @click="openAddMultiple">Add Multiple</button>
    </div>


    <div id="admin-masters-backdrop" v-show="isAddMultiple || isAddOne" @click="closePopUps"></div>
    <add-one v-show="isAddOne" @closePopUps="closePopUps" ref="addOne" @saveOne="saveOne"></add-one>
    <add-multiple v-show="isAddMultiple" @closePopUps="closePopUps" ref="addMultiple" @saveMultiple="saveMultiple"></add-multiple>
    <div id="admin-mastersimage"></div>
  </div>
</template>

<script>
import ListItem from "./ListItem";
import AddOne from "./AddOne";
import AddMultiple from "./AddMultiple";
export default {
  name: "AdminMasters",
  components: { ListItem , AddOne , AddMultiple},
  data() {
    return {
      masters : [{firstName : 'mahdi' , lastName : 'chavoshi' , code : 123456789 , password : 'fev56v516'},{firstName : 'bita' , lastName : 'khashechian' ,  code : 987654321 , password : 'fev56v516'},{firstName: 'amin' , lastName : 'farzane' , code : 512364798 , password : 'fev56v516'}],
      masters1 : [],
      masters2 : [],
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
      let num = this.masters1.findIndex(master => master.code === code)
      if(num > -1){
        this.masters1.splice(num , 1)
      }
      else{
        num = this.masters2.findIndex(master => master.code === code)
        this.masters2.splice(num , 1)
      }
    },
    saveMultiple() {
      for (let i = 0 ; i < this.$refs.addMultiple.list.length ; i++){
        if (this.add){
          this.masters2.push(this.$refs.addMultiple.list[i])
          this.add = false
        }
        else {
          this.masters1.push(this.$refs.addMultiple.list[i])
          this.add = true
        }
      }
      this.$refs.addMultiple.list = []
      this.closePopUps()
    },
    saveOne() {
      // save to server left
      console.log(this.$refs.addOne.code)
      if (this.editAction === true) {
        let num = this.masters1.findIndex(master => master.code === this.editCode)
        if(num > -1){
          this.masters1[num].code = this.$refs.addOne.code
          this.masters1[num].firstName = this.$refs.addOne.firstName
          this.masters1[num].lastName = this.$refs.addOne.lastName
          this.masters1[num].password = this.$refs.addOne.password
          this.editAction = false
        }
        else{
          num = this.masters2.findIndex(master => master.code === this.editCode)
          this.masters2[num].code = this.$refs.addOne.code
          this.masters2[num].firstName = this.$refs.addOne.firstName
          this.masters2[num].lastName = this.$refs.addOne.lastName
          this.masters2[num].password = this.$refs.addOne.password
          this.editAction = false
        }
      }
      else {
        const master = {
          firstName : this.$refs.addOne.firstName,
          lastName : this.$refs.addOne.lastName,
          code : this.$refs.addOne.code,
          password : this.$refs.addOne.password
        }
        if (this.add) {
          this.masters1.push(master)
          this.add = false
        }
        else {
          this.masters2.push(master)
          this.add = true
        }
      }
      this.closePopUps()
    }
  },
  beforeMount() {
    //fetch
    const num = Math.round(this.masters.length/2)
    this.masters1 = this.masters.slice(0 , num)
    this.masters2 = this.masters.slice(num ,this.masters.length)
  }
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#admin-masters-container {
  width: 100%;
  height: 100%;
  padding: 64px 0 32px;
  display: grid;
  grid-template-areas:
  'left right'
  'buttons buttons';
  grid-template-rows: 9fr 1fr;
  grid-template-columns: 1fr 1fr;

  .masters-list {
    width: 100%;
    height: 100%;
    padding: 0 64px;
    overflow-y: auto;
  }
  #masters-list-left {
    grid-area: left;
    border-right: 1px solid $color-orange-main;
  }
  #masters-list-right {
    grid-area: right;
    border-left: 1px solid $color-orange-main;
  }
  #admin-masters-buttons-div {
    grid-area: buttons;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-content: center;

    .admin-masters-buttons {
      background: $color-orange-main;
      color: white;
      padding: 0;
      margin: 8px 16px 0;
      border-radius: 30px;
      width: 160px;
    }
    .admin-masters-buttons:hover {
      background: lighten($color-orange-main,5%);
    }
  }

  #admin-masters-backdrop {
    display: block; //none or block
    @include page-backdrop;
  }
  #admin-masters-image {
    background-image: url("./../../assets/AdminMasters.svg");
    @include page-image;
  }
}
@include scrollbar;
</style>