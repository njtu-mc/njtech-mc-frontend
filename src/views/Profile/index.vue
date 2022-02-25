<template>
<div class="grid-box">
  <div><img :src="getUrl"></div>
  <div class="main">
    <buttons v-if="noName"></buttons>
    <IdCard v-else></IdCard>
  </div>
</div>
</template>

<script>
import {getBodyImg} from "../../utils/getImg";
import Buttons from "./buttons";
import IdCard from "./IdCard";
export default {
  name: "index",
  components: {IdCard, Buttons},
  computed:{
    getUrl:()=>getBodyImg(),
    noName(){
//      console.log(this.$store.state.user.name===null)
      return this.$store.state.user.name===null||this.$store.state.user.name===''
    }
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