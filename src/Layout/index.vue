<template>
  <div class="layout">
    <Layout>
      <Header>
        <NavBar></NavBar>
      </Header>
      <Content class="mt-content">
        <div class="center-content">
          <div style="grid-column: 1;width: 400px"><img :src="getUrl"></div>
          <div class="main">123</div>
        </div>
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

.center-content {
  display: grid;
  grid-auto-flow: column;
}

.mt-content {

  padding: 20px 20px 20px 20px;
}

.main {
  display: inline;
  padding: 10px 15px 10px 15px;
  grid-column: 2/span 2;
}
</style>
<script>
import NavBar from "./NavBar";
import {getBody} from "../utils/getImg";

export default {
  components: {NavBar},
  computed: {
    getUrl: () => getBody()
  }
}
</script>