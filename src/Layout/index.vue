<template>
  <div class="layout">
    <Layout>
      <Header>
        <NavBar></NavBar>
      </Header>
      <Content class="mt-content">
      </Content>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
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
  padding-left: 30px;
  padding-right: 30px;
}

.layout-footer-center {
  text-align: center;
}

.mt-content{
  min-height: 500px;
}
</style>
<script>
import NavBar from "./NavBar";

export default {
  components: {NavBar}
}
</script>