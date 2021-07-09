<template>
  <div id="add-multiple-container">
    <div id="add-multiple-box">
      <form class="text-center">
        <v-text-field
            color="#ED6038"
            label="Name"
            class="headline"
        ></v-text-field>
        <v-text-field
            color="#ED6038"
            label="Code"
            class="headline"
        ></v-text-field>
        <v-text-field
            color="#ED6038"
            label="Password"
            class="headline"
        ></v-text-field>
        <button id="add-multiple-btn">Add</button>
      </form>
      <div id="added-accounts">
        <div class="added-account">
          <label class="account-name">Mahdi Chavoshi</label>
          <label class="account-id">234508534</label>
          <button class="account-remove" title="Remove"><i class="far fa-times-circle"></i></button>
        </div>
        <div class="added-account">
          <label class="account-name">Yashar Masrouri</label>
          <label class="account-id">244508534</label>
          <button class="account-remove" title="Remove"><i class="far fa-times-circle"></i></button>
        </div>
        <button id="save-accounts">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddMultiple"
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#add-multiple-container {
  @include popup-container;

  #add-multiple-box {
    width: 27%;
    height: fit-content;
    background: white;
    border-radius: 30px;
    padding: 32px;
    max-height: 80%;
    overflow-y: auto;
    position: absolute;

    #add-multiple-btn {
      background: $color-orange-main;
      color: white;
      border-radius: 30px;
      padding: 10px 44px;
    }
    #add-multiple-btn:hover {
      background: lighten($color-orange-main,5%);
    }

    #added-accounts {
      text-align: center;
      margin-top: 16px;

      .added-account {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid;
        padding: 8px 0;

        .account-name {
          width: 50%;
          text-align: left;
        }
        .account-id {
          width: 40%;
          text-align: left;
        }
        .account-remove {
          width: 10%;
          text-align: right;
          color: $color-orange-main;
        }
        .account-remove:hover {
          //color: lighten($color-orange-main,5%);
          color: red;
        }
      }

      #save-accounts,
      #abort-accounts {
        background: $color-orange-main;
        color: white;
        border-radius: 30px;
        padding: 10px 44px;
        margin: 16px 8px 0;
      }
      #save-accounts:hover,
      #abort-accounts:hover {
        background: lighten($color-orange-main,5%);
      }
    }

  }


}
@include scrollbar;
</style>