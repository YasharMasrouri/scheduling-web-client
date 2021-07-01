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
          <label id="info-name">{{ name }}</label>
          <label id="info-ID">{{ code }}</label>
        </div>

        <div id="content-image">
          <v-avatar>
            <span>JT</span>
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
  border: 1px solid black;
  border-radius: 50px;
  padding: 0 30px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin: auto;

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
        background: red;
        border-radius: 50%;
        color: white;
      }
    }
  }
}


</style>