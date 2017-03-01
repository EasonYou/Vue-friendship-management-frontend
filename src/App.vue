<template>
  <div id="app">
  	<el-row class="head-row">
  		<div class="head">
  			Vue Friendship Management
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
			overflow: scroll;
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
