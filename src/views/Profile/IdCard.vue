<template>
  <Card>
    <p slot="title">个人名片</p>
    <div class="item">邮箱：{{ email }}<span style="padding: 20px"><Button type="primary" @click="changeMail">修改邮箱</Button></span>
    </div>
    <div class="item">姓名：{{ name }}</div>
    <div class="item">学校：{{ school }}</div>
    <div class="item">性别：<Select v-model="nowSex" style="width: 100px">
      <Option v-for="item in sexItems" :value="item.value" :key="item.value">{{ item.sex }}</Option>
    </Select>
      <span style="padding: 20px"><Button type="primary" @click="submitSex">修改性别（这不是变性）</Button></span>
    </div>
    <Modal v-model="showModal" title="修改邮箱" @on-ok="putMail">
      <Input placeholder="请输入要绑定的邮箱" size="large" style="margin: 10px" v-model="mail"></Input>
      <Input style="width: 120px;margin: 10px" placeholder="请输入验证码" size="large" v-model="code"></Input>
      <Button size="large" type="primary" @click="getCode">获取验证码</Button>
    </Modal>
  </Card>
</template>

<script>
import {getCode, putMail} from "../../api/user";

export default {
  name: "IdCard",
  data() {
    return {
      sexItems: [{value: 0, sex: '未知'}, {value: 1, sex: '男'}, {value: 2, sex: '女'}],
      nowSex: this.gender,
      newMail: '',
      showModal: false,
      mail: '',
      code: '',
      loading: false
    }
  },
  mounted() {
    this.nowSex = this.gender
  },
  computed: {
    name() {
      return this.$store.state.user.name
    },
    email() {
      return this.$store.state.user.email
    },
    school() {
      return this.$store.state.user.school
    },
    gender() {
      return this.$store.state.user.gender
    }
  },
  methods: {
    submitSex() {
      this.$store.dispatch('user/changeSex', {'gender': this.nowSex})
    },
    changeMail() {
      console.log(123)
      this.showModal = true
    },
    getCode() {
      const reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/
      if (!reg.test(this.mail)) {
        this.$Message.error('请输入正确的邮箱信息')
        return
      }
      getCode({mail: this.mail}).then(() => {
        this.$Message.success('验证码发送成功，注意查收')
        Promise.resolve()
      }).catch((err) => {
        this.$Message.error(err.data)
        Promise.reject(err)
      })
    },
    putMail() {
      putMail({mail: this.mail, code: this.code}).then(() => {
        this.$Message.success('修改成功')
        this.$router.replace('/profile')
        Promise.resolve()
      })
          .catch(err => {
            this.$Message.error(err.data)
            Promise.reject(err)
          })
    }
  }
}
</script>

<style scoped>
.item {
  margin: 15px;
  font-weight: 700;
  font-size: 20px;
}
</style>