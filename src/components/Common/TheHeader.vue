<template>
  <div id="header-container">

    <div id="header-list">list</div>

    <div id="header-profile">

      <div id="profile-content">
        <div id="content-dropdown">🔽</div>
        <div id="content-info">
          <label id="info-name">Jafar Tanha</label>
          <label id="info-ID">123456789</label>
        </div>
        <div id="content-image">
          pic
        </div>
      </div>

      <div id="profile-menu"></div>

    </div>

  </div>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style scoped lang="scss">

#header-container {
  width: 65%;
  height: 10%;
  border: 1px solid black;
  border-radius: 50px;
  padding: 0 30px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  #header-profile {

    #profile-content {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;

      #content-dropdown {
        margin: 0 8px;
      }
      #content-info {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: flex-end;
        margin: 0 8px;

        #info-name {
          font-size: 15pt;
        }
        #info-ID {
          font-size: 11pt;
        }
      }
      #content-image {

        border-radius: 50%;
        background: gray;
        margin: 0 8px;
      }
    }
  }
}



</style>