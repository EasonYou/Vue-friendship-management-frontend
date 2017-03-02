<template>
  <el-col :span="8" class="login-col">
    <div class="input-container">
      <el-input
        placeholder="请输入账号" v-model = "account">
      </el-input>
      <el-input
        placeholder="请输入密码" v-model = "password" type="password">
      </el-input>
      <el-button type="primary" @click="login">登陆</el-button>
      <el-checkbox>记住密码</el-checkbox>
    </div>
  </el-col>
</template>

<script>
import axios from 'axios'
import querystring from 'querystring'
import utility from 'utility'
export default {
  name: 'hello',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    login () {
      let self = this
      axios.post('http://localhost:3000/api/login',querystring.stringify({
       account: self.account,
       password: utility.md5(self.password)
      }))
      .then(function (response) {
        if(response.data.status === 200) {
          self.$router.push({ name: 'Home', params: { userId: 123 }})
        } else {
            self.$message.error('用户名或密码错误！');
        }
      })
      .catch(function (error) {
       console.log(error);
      });
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
