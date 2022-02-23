<template>
  <span>
    <Avatar :src="getUrl" size="55"></Avatar>
  </span>
</template>

<script>
import {getAvatar} from "../utils/getImg";

export default {
  name: "myAvatar",
  props: ['uuid'],
  computed: {
    getUrl: () => getAvatar()
  }
}
</script>

<style scoped>
.logo {
  border: solid 1px black;
  border-radius: 50%;
}
</style>