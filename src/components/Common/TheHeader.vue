<template>
  <div id="header-container" style="background-color: #ffffff">

    <div id="header-list">
      <slot></slot>
    </div>

    <div id="header-profile">

      <div id="profile-content">

        <div id="content-dropdown">
          <button id="dropdown-icon">
            <i class="fas fa-caret-down"></i>
          </button>
        </div>

        <div id="content-info">
<!--          <label id="info-name">{{ name }}</label>-->
<!--          <label id="info-ID">{{ code }}</label>-->
          <label id="info-name">Jafar Tanha</label>
          <label id="info-ID">125478652</label>
        </div>

        <div id="content-image">
          <v-avatar size="60" color="red">
            <img src="./../../assets/avatar-test.png">
          </v-avatar>
        </div>

      </div>

      <div id="profile-menu"></div>


    </div>

  </div>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      code : this.$store.state.user.code,
      name : this.$store.state.user.firstName + " " + this.$store.state.user.lastName,
      image : this.$store.state.user.userImage
    }
  },
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#header-container {
  width: 65%;
  height: 81%;
  border: none;
  border-radius: 50px;
  padding: 0 30px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  #header-list {
    //background: blue;
    .the-header-list-item {
      color: black;
      text-decoration: none;
      margin: 26px;
      padding: 8px 0;
    }
    .the-header-list-item:first-of-type {
      margin-left: 0;
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

    #profile-content {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      height: 100%;

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

      #content-image {
      }
    }
  }
}


</style>