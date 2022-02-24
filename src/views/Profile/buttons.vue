<template>
  <div>
    <h2>您尚未认证，请选择以下两个方式认证</h2>
    <div class="btn-box">
      <Button size="large">邮箱认证</Button>
    </div>
    <div class="btn-box">
      <Button size="large" @click="injtech">智慧南工统一认证</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: "buttons",
  data() {
    return {}
  },
  methods: {
    injtech() {
      this.$Modal.confirm({
        title: '特别提醒',
        content: '<p>此操作需要在校园网络下进行，并且请使用自己的智慧南工登录校园网，请确定您的网络状态是否符合条件</p>',
        okText: '确定好了',
        cancelText: '我再回去瞅瞅'
      })
    },
    ok() {

    },
    cancel() {

    }
  }
}
</script>

<style scoped>
.btn-box {
  margin: 20px 0px 20px 0px;
}
</style>