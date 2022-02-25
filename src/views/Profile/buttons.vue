<template>
  <div>
    <h2>您尚未认证，请选择以下两个方式认证</h2>
    <div class="btn-box">
      <Button size="large" @click="mail">邮箱认证</Button>
    </div>
    <div class="btn-box">
      <Button size="large" @click="injtech" :loading="is_loading">智慧南工统一认证</Button>
    </div>
    <Modal v-model="showModal" title="填写表单" @on-ok="submit">
      <Input v-model="form.real_name" placeholder="请输入姓名" style="margin: 10px" size="large"></Input>
      <Input v-model="form.open_id" placeholder="请输入学号" style="margin: 10px" size="large"></Input>
      <Input v-model="form.code" placeholder="请输入验证码" style="width: 130px;margin: 10px" size="large"></Input>
      <Button size="large" type="primary" @click="getCode">获取验证码（发送到您的学校邮箱）</Button>
    </Modal>
  </div>
</template>

<script>
import {getCode, postInfo} from "../../api/user";

export default {
  name: "buttons",
  data() {
    return {
      is_loading: false,
      showModal: false,
      form: {
        real_name: '',
        open_id: '',
        code: ''
      }
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
    },
    mail() {
      this.showModal = true
    },
    getCode() {
      const mail = this.form.open_id + '@njtech.edu.cn'
      getCode({mail: mail}).then(() => {
        this.$Message.success('验证码发送成功，注意查收')
        Promise.resolve()
      }).catch((err) => {
        this.$Message.error(err.data)
        Promise.reject(err)
      })
    },
    submit() {
      postInfo(this.form).then(() => {
        this.$Message.success('绑定成功')
        location.reload()
        Promise.resolve()
      }).catch(err => {
        this.$Message.error(err.data)
        Promise.reject(err)
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