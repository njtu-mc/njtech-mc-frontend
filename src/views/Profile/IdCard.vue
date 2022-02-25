<template>
  <Card>
    <p slot="title">个人名片</p>
    <div class="item">邮箱：{{ email }}<span style="padding: 20px"><Button>修改邮箱</Button></span></div>
    <div class="item">姓名：{{ name }}</div>
    <div class="item">学校：{{ school }}</div>
    <div class="item">性别：{{ toSex[gender] }}</div>
  </Card>
</template>

<script>
//import {mapState} from "vuex";

export default {
  name: "IdCard",
  data() {
    return {
      toSex: ['未知', '男', '女']
    }
  },
  computed: {
    /*...mapState({
      name:'user/name',
      email:'user/email',
      gender:'user/gender',
      school:'user/school'
    }),*/
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
  }
}
</script>

<style scoped>
.item{
  margin: 15px;
  font-weight: 700;
  font-size: 20px;
}
</style>