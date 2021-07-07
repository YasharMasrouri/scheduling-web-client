<template>
  <div id="admin-home-container">
    <table>
      <tr>
        <th>Day</th>
        <th>8-9</th>
        <th>9-10</th>
        <th>10-11</th>
        <th>11-12</th>
        <th>12-1</th>
        <th>1-2</th>
        <th>2-3</th>
        <th>3-4</th>
        <th>4-5</th>
      </tr>
      <tr>
        <td>Saturday</td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>

      </tr>
      <tr>
        <td>Sunday</td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
      </tr>
      <tr>
        <td>Monday</td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
      </tr>
      <tr>
        <td>Tuesday</td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
      </tr>
      <tr>
        <td>Wednesday</td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
      </tr>
      <tr>
        <td>Thursday</td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
        <td><button><i class="fal fa-angle-down"></i></button></td>
      </tr>
    </table>
    <table-cell></table-cell>
    <div id="admin-home-backdrop"></div>
    <div id="admin-home-image"></div>
  </div>
</template>

<script>
import TableCell from "@/components/Admin/TableCell";
export default {
  name: "AdminHome",
  components: {TableCell}
}
</script>

<style scoped lang="scss">
@import "./../../../public/-variables";

#admin-home-container{
  width: 100%;
  height: 100%;
  @include flex-center;

  table {
    border-collapse: collapse;
    width: 80%;
    height: 80%;
  }
  th, td {
    //padding: 8px;
    text-align: center;
    border-bottom: 1px solid $color-blue-table;
    width: calc(100%/10);
    height: calc (100%/7);
  }
  td {
    button {
      width: 100%;
      height: 100%;
      i {font-size: 14pt;}
    }
    button:hover {
      i {font-weight: bold;}
    }
  }

  #admin-home-backdrop {
    @include page-backdrop;
  }

  #admin-home-image {
    background-image: url("./../../assets/StudentHome.svg");
    @include page-image;
  }
}
</style>