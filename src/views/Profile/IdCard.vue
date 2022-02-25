<template>
  <Card>
    <p slot="title">个人名片</p>
    <div class="item">邮箱：{{ email }}<span style="padding: 20px"><Button type="primary">修改邮箱</Button></span></div>
    <div class="item">姓名：{{ name }}</div>
    <div class="item">学校：{{ school }}</div>
    <div class="item">性别：<Select v-model="nowSex" style="width: 100px">
      <Option v-for="item in sexItems" :value="item.value" :key="item.value">{{ item.sex }}</Option>
    </Select>
    <span style="padding: 20px"><Button type="primary" @click="submitSex">修改性别（这不是变性）</Button></span>
    </div>
  </Card>
</template>

<script>
//import {mapState} from "vuex";

export default {
  name: "IdCard",
  data() {
    return {
      sexItems: [{value: 0, sex: '未知'}, {value: 1, sex: '男'}, {value: 2, sex: '女'}],
      nowSex: this.gender
    }
  },
  mounted() {
    this.nowSex = this.gender
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
  },
  methods:{
    submitSex(){
      this.$store.dispatch('user/changeSex',{'gender':this.nowSex})
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