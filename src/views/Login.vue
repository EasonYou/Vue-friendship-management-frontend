<template>
<el-col :span="8" class="login-col">
    <div class="input-container">
      <el-form :model="loginData" 
               :rules="rules" 
               ref="ruleForm2" 
               label-position="left" 
               label-width="100px" 
               class="demo-ruleForm">
        <el-form-item label="用户名" 
                      prop="account">
          <el-input v-model="loginData.account" 
                    auto-complete="off" 
                    @keyup.enter.native="login">
          </el-input>
        </el-form-item>
        <el-form-item label="密码" 
                      prop="password">
          <el-input type="password" 
                    v-model="loginData.password" 
                    auto-complete="off"  
                    @keyup.enter.native="login"></el-input>
        </el-form-item>
        </el-form-item>
          <el-button type="primary" 
                     @click="login">登陆</el-button>
      </el-form>
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
      loginData: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          {
            required: true,
            message: '请输入账号',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      console.log(this)
      this.$store.dispatch('login', {
        account: this.loginData.account,
        password: this.loginData.password,
        vue: this
      })
    },
    hehe () {
      console.log('aaa')
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
      display: flex;
      .input-container {
          width: 70%;
          margin: 0 auto;
          padding: 80px 0;
          .el-form-item {
            // margin: 0;
            .el-input {
              // margin-bottom: 15px;
              // width: 70%;
           }
          }
          
      }
      
  }
</style>
