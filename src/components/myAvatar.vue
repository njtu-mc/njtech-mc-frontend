<template>
  <span>
    <Avatar :src="src" size="55"></Avatar>
  </span>
</template>

<script>
export default {
  name: "myAvatar",
  props:['uuid'],
  computed:{
    getCss(){
      return {
//        width:this.size+'px',
//        height:this.size+'px',
        display:'inline'
      }
    },
    src(){
      return 'https://crafatar.com/renders/head/'+this.uuid
    }
  }
}
</script>

<style scoped>
.logo{
  border: solid 1px black;
  border-radius: 50%;
}
</style>