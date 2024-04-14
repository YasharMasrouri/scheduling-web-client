<template>
  <div id="header-container" style="background-color: #ffffff">

    <div id="header-list">
      <slot></slot>
    </div>

    <div id="header-profile" :style="headerStyle">

      <div id="profile-content">
        <div id="content-dropdown">
          <button id="dropdown-icon" @click="dropDownMenu">
            <i class="fas fa-caret-down"></i>
          </button>
        </div>
        <div id="content-info">
          <label id="info-name">{{ getname }}</label>
          <label id="info-ID">{{ code }}</label>
        </div>
        <div id="content-image">
          <v-avatar size="60" color="red">
            <img src="./../../assets/avatar-test.png">
          </v-avatar>
        </div>
      </div>

      <div id="profile-list" v-if="showDropdownMenu">
        <div>
          <button class="profile-list-item" @click="gotoEdit"><i class="fas fa-cog profile-list-icon"></i>Edit Profile</button>
        </div>
        <div>
          <button class="profile-list-item" @click="logOut"><i class="far fa-sign-out profile-list-icon"></i>Log Out</button>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "TheHeader",
  data() {
    return {
      code : this.$store.state.user.code,
      image : this.$store.state.user.userImage,
      showDropdownMenu : false,
      headerStyle : 'border : none' ,

    }
  },
  computed : {
    ...mapGetters(['getname'])
  },
  methods : {
    gotoEdit() {
      this.$router.push(`/${this.$store.state.user.role}/Edit`)
    },
    dropDownMenu() {
      if (!this.showDropdownMenu) {
        this.showDropdownMenu = true
        this.headerStyle = 'box-shadow: 2px 3px 4px grey;'
      }
      else {
        this.showDropdownMenu = false
        this.headerStyle = ''
      }
    },
    logOut() {
      this.$store.commit('reset')
      this.$router.push('/')
    }
  }

}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#header-container {
  width: 65%;
  height: 70%;
  border: none;
  border-radius: 50px;
  padding: 0 0 0 30px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin: auto auto 0 auto;
  position: relative;

  #header-list {
    //background: blue;
    .the-header-list-item {
      color: black;
      text-decoration: none;
      margin: 26px;
      padding: 8px 0;
    }
    .the-header-list-item:last-of-type {
      margin-right: 0;
    }
    .the-header-list-item:hover {
      color: $color-orange-main;
      border-bottom: 1px solid $color-orange-main;

    }
    .list-item-active {
      color: $color-orange-main;
      border-bottom: 1px solid $color-orange-main;
    }
  }

  #header-profile {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 30px 0 15px;
    border-radius: 0 50px 50px;
    background: #ffffff;
    border: none;

    #profile-content {
      @include flex-center;
      margin: 15px 0 ;

      #content-dropdown {
        #dropdown-icon {
          width: 35px;
          height: 35px;
          border: none;
          border-radius: 50%;
          color: $color-blue-btn;
          @include flex-center;
          background: transparent;
          font-size: 15pt;
        }
        #dropdown-icon:hover {
          background: #f3f3f3;
        }
      }

      #content-info {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: flex-end;
        margin: 0 16px 0 8px;

        #info-name {
          font-size: 15pt;
        }
        #info-ID {
          font-size: 11pt;
        }
      }

    }

    #profile-list {
      display: block; // toggle none and block
      .profile-list-item {
        width: 100%;
        padding: 16px 8px;
        text-align: left;
        border-top: 1px solid black;
        font-size: 15pt;
      }
      .profile-list-item:hover {
        font-weight: bold;
      }
      .profile-list-icon {
        color: $color-orange-main;
        margin-right: 16px;
      }
      div:last-of-type {
        margin-bottom: 16px;
      }
    }
  }
}


</style>