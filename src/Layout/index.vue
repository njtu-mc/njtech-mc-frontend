<template>
  <div class="layout">
    <Layout>
      <Header>
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
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
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