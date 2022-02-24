<template>
  <Menu class="nav" mode="horizontal" theme="dark" @on-select="handleSelect" active-name="">
    <a @click="goHome"><span class="logo">{{ this.$store.state.website.name }}</span></a>
    <span class="avatar">
      <Submenu name="self" appear="false" v-if="get_uuid!==0">
        <template slot="title">
          <myAvatar :uuid="get_uuid"></myAvatar>
        </template>
        <MenuItem name="profile" to="/profile">个人主页</MenuItem>
        <MenuItem :disabled="true" name="more">待开发</MenuItem>
        <MenuItem name="logout" @click="logout">登出</MenuItem>
      </Submenu>
      <Button @click="login" :loading="loading" v-else>登录</Button>
    </span>
  </Menu>
</template>

<script>
import myAvatar from "../components/myAvatar";

export default {
  name: "NavBar",
  components: {myAvatar},
  data() {
    return {
      hadLogin: false,
      loading: false
    }
  },
  methods: {
    goHome() {
      this.$router.push('/')
    },
    login() {
      this.loading = true
      window.location.href = "https://login.live.com/oauth20_authorize.srf?client_id=123d3926-039e-4a40-833a-fecb0cd1c86e&response_type=code&redirect_uri=https://api.njtumc.org/auth&scope=XboxLive.signin%20offline_access"
    },
    logout() {
      this.$store.dispatch('user/logout')
      this.$router.replace('/')
    },
    handleSelect(name) {
      if (name === 'logout') this.logout()
    }
  },
  computed: {
    get_uuid() {
      return this.$store.state.user.mc_id
    }
  }
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

.avatar {
  float: right;
}

i {
  color: #515a6e
}
</style>