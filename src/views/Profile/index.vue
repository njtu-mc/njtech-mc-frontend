<template>
<div class="grid-box">
  <div><img :src="getUrl"></div>
  <div class="main">
    <buttons></buttons>
  </div>
</div>
</template>

<script>
import {getBodyImg} from "../../utils/getImg";
import Buttons from "./buttons";
export default {
  name: "index",
  components: {Buttons},
  computed:{
    getUrl:()=>getBodyImg()
  },
  mounted() {

  }
}
</script>

<style scoped>
.grid-box{
  display: grid;
  grid-template-columns: 1fr 6fr;
}
.main{
  padding: 10px 20px 10px 20px;
}
</style>