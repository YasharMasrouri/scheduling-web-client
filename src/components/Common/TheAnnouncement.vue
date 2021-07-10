<template>
  <div id="announcement-container">
    <div class="announcement-row">
      <h4 id="announcement-title"><slot name="title"></slot></h4>
      <label id="announcement-date">Date:<slot name="date"></slot></label>
    </div>
    <div class="announcement-row">
      <div id="announcement-text-div">
        <p><slot name="text"></slot></p>
      </div>
      <button v-if="editable" id="announcement-delete" title="Delete Announcement" @click="delet"><i class="fal fa-trash-alt"></i></button>
    </div>

  </div>
</template>

<script>
export default {
  name: "TheAnnouncement",
  props: {
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  methods : {
    delet() {
      this.$emit('deleteAnnouncement')
    }
  }
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#announcement-container {
  width: 100%;
  border: 1px solid $color-orange-main;
  border-radius: 30px;
  padding: 16px 32px;
  margin: 16px 0;

  .announcement-row {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 16px 0;
  }

  #announcement-title {
    font-size: 16pt;
  }
  #announcement-date {
    color: #777777;
  }
  #announcement-text-div {
    //height: 70px;
    max-height: 70px;
    overflow-y: auto;
    p {
      margin: 0;
      padding: 0;
    }
  }
  #announcement-delete {
    color: $color-orange-main;
    font-size: 22pt;
    margin-left: 16px;
  }
}
@include scrollbar;
</style>