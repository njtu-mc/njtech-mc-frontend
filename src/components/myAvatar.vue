<template>
<div :style="getCss" class="my-avatar">
  <img :src="this.src" :style="getCss">
</div>
</template>

<script>
export default {
  name: "Avatar",
  props:['uuid','size'],
  computed:{
    getCss(){
      return {
        width:this.size+'px',
        height:this.size+'px',
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

</style>