<template>
  <Menu class="nav" mode="horizontal" theme="dark">
    <a href="#/"><span class="logo">{{ this.$store.state.website.name }}</span></a>
    <span style="float: right">
      <Submenu>
        <template slot="title">
          <myAvatar uuid="6e0f9028bf914fa58580e02d10eaeae6"></myAvatar>
        </template>
        <MenuItem>个人主页</MenuItem>
      </Submenu>
    </span>
  </Menu>
</template>

<script>
import myAvatar from "../components/myAvatar";

export default {
  name: "NavBar",
  components: {myAvatar}
}
</script>

<style scoped>
.logo {

  background: linear-gradient(45deg, #1976d2, rgba(25, 118, 210, .4));
  font-size: 30px;
  font-weight: 700;
  color: #00000000;
  -webkit-background-clip: text;
}

i {
  color: #515a6e
}
</style>