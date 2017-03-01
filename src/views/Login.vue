<template>
  <el-col :span="8" class="login-col">
    <div class="input-container">
      <el-input
        placeholder="请输入账号">
      </el-input>
      <el-input
        placeholder="请输入密码">
      </el-input>
      <el-button type="primary" @click="login">登陆</el-button>
      <el-checkbox>记住密码</el-checkbox>
    </div>
  </el-col>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    login () {
      this.$router.push({ name: 'Home', params: { userId: 123 }})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .login-col {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -90%);
      float: none;
      box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
      .input-container {
          width: 70%;
          margin: 0 auto;
          padding: 80px 0;
          .el-input {
              margin-bottom: 15px;
          }
      }
      
  }
</style>
