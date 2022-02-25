<template>
  <div>
    <h2>您尚未认证，请选择以下两个方式认证</h2>
    <div class="btn-box">
      <Button size="large" @click="mail">邮箱认证</Button>
    </div>
    <div class="btn-box">
      <Button size="large" @click="injtech" :loading="is_loading">智慧南工统一认证</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: "buttons",
  data() {
    return {
      is_loading: false
    }
  },
  methods: {
    injtech() {
      this.is_loading = true
      this.$Modal.confirm({
        title: '特别提醒',
        content: '<p>此操作需要在校园网络下进行，并且请使用自己的智慧南工登录校园网以及南工在线，请确定您的状态是否符合条件</p>',
        okText: '确定好了',
        cancelText: '我再回去瞅瞅',
        onOk() {
          window.location.href = 'https://api.njtumc.org/api/user/authorize'
        },
        onCancel() {
          this.is_loading = false
        }
      })
    }
  }
}
</script>

<style scoped>
.btn-box {
  margin: 20px 0px 20px 0px;
}
</style>