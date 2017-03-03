<template>
  <div id="app">
  	<el-row class="head-row">
  		<div class="head">
  			Vue Friendship Management
        <el-button type="text" size="large" @click="logout" v-if="isLogin">登出</el-button>
  		</div>
  	</el-row>
  	<el-row class="app-row">
	  	<FSMenu v-if="isLogin"></FSMenu>
	    <router-view></router-view>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
import FSMenu from './components/FSMenu'
export default {
  name: 'app',
  components: {
		FSMenu
	},
	data () {
		return {
			isLogin: true
		}
	},
  methods: {
    logout () {
      this.$store.dispatch('logout', this)
    }
  },
	created() {
		console.log(this.$route)
		if(this.$route.name === 'Login') {
			this.isLogin = false
		}
	},
	watch: {
		$route (to, from) {
			console.log(to.name)
			if(to.name=== 'Login') {
				this.isLogin = false
			} else {
				this.isLogin = true
			}
		}
	}
}
</script>

<style lang="scss">
html, body {
	width: 100%;
	height: 100%;
	margin: 0;
	min-width: 1000px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
  .head-row {
  	.head {
  		height: 80px;
  		background-color: #20A0FF;
  		z-index: 2;
  		position: fixed;
  		top: 0;
  		width: 100%;
  		text-align: left;
  		color: #fff;
  		line-height: 80px;
  		padding-left: 50px;
      .el-button {
        color: #fff;
        // float: right;
        position: absolute;
        right: 100px;
        top: 20px;
        z-index: 100;
      }
  	}
  }
  .app-row {
		height: 100%;
		width: 100%;
		position: fixed;
		top: 80px;
		z-index: 1;
		.el-col-21 {
			margin-left: 12.5%;
			height: 100%;
			overflow-y: scroll;
		}
    /*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/
    .el-col-21::-webkit-scrollbar{
        width: 10px;
        height: 10px;
        background-color: #f5f5f5;
    }
    /*定义滚动条的轨道，内阴影及圆角*/
    .el-col-21::-webkit-scrollbar-track{
        // -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        // border-radius: 2px;
        background-color: #f5f5f5;
    }
    /*定义滑块，内阴影及圆角*/
    .el-col-21::-webkit-scrollbar-thumb{
        /*width: 10px;*/
        height: 20px;
        border-radius: 4px;
        // -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #cacaca;
    }
	}
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
}
</style>
