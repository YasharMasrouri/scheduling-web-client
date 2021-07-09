<template>
  <div id="add-announcement-container">
    <div id="add-announcement-box">
      <button class="close-box"><i class="far fa-times-circle"></i></button>
      <form class="text-left">
        <v-text-field
            color="#ED6038"
            label="Title"
            style="width: 20%"
        ></v-text-field>
        <v-text-field
            color="#ED6038"
            label="Date"
            type="date"
            style="width: 15%"
        ></v-text-field>
        <v-textarea
            color="#ED6038"
            no-resize
            label="Description"
            style="height: 200px"
        ></v-textarea>
        <button id="add-announcement-btn">Add</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddAnnouncement"
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#add-announcement-container {
  @include popup-container;

  #add-announcement-box {
    width: 70%;
    height: fit-content;
    background: white;
    border-radius: 30px;
    padding: 32px;
    position: absolute;

    .close-box {
      position: absolute;
      top: 24px;
      right: 24px;
      color: black;
      font-size: 14pt;
    }
    .close-box:hover {
      color: red;
    }

    #add-announcement-btn {
      background: $color-orange-main;
      color: white;
      border-radius: 30px;
      padding: 10px 44px;
    }
    #add-announcement-btn:hover {
      background: lighten($color-orange-main,5%);
    }
  }
}
</style>