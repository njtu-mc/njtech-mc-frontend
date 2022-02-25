<template>
  <div class="layout">
    <Layout>
      <Header class="header">
        <NavBar></NavBar>
      </Header>
      <Content class="mt-content">
        <router-view></router-view>
      </Content>
      <Footer class="layout-footer-center">2022-正无穷 &copy; MARS Studio</Footer>
    </Layout>
  </div>
</template>
<style scoped>
.layout {
  min-width: 750px;
  background: #f5f7f9;
  position: relative;
}
.header{
}
.ivu-layout-header {
  padding-left: 1rem;
  padding-right: 1rem;
}

.layout-footer-center {
  text-align: center;
}


.mt-content {
  padding: 20px 20px 20px 20px;
}

</style>
<script>
import NavBar from "./NavBar";

export default {
  components: {NavBar},
  computed: {}
}
</script>