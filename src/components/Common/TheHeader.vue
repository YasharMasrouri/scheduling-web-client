<template>
  <div id="header-container">
    <div id="header-list">list</div>
    <div id="header-profile>">
      <div id="profile-content">
        <div id="content-dropdown"></div>
        <div id="content-info"></div>
        <div id="content-image"></div>
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
}

</style>