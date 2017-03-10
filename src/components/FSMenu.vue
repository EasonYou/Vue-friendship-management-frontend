<template>
	<el-col :span="3" class="menu-col">
		<div class="menu">
		<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
	      <el-menu-item index="1" @click="toHome"><i class="el-icon-menu"></i>用户列表</el-menu-item>
	      <el-submenu index="2">
	        <template slot="title"><i class="el-icon-message"></i>分析表</template>
	        <el-menu-item-group>
	          <el-menu-item index="1-1">男女比例</el-menu-item>
	          <el-menu-item index="1-2">年龄</el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
	      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
	    </el-menu>
	    </div>
	</el-col>
</template>
<script>
	export default {
		computed: {
			currentPage () {
				return this.$store.getters.currentPage
			}
		},
		methods: {
			toHome () {
				console.log(this.$store.getters.currentPage)
				this.$store.dispatch('getUserLists', {
					vue: this,
					page: this.currentPage
				})
				this.$router.push({name: 'Home'})
			},
			handleOpen(key, keyPath) {
		        console.log(key, keyPath);
		    },
		    handleClose(key, keyPath) {
		        console.log(key, keyPath);
		    }
		}
	}
</script>
<style lang="scss">
	.menu-col {
		height: 100%;
		position: fixed;
		top: 0;
		background-color: #e4e8f1;
		z-index: -1;
		.menu {
			padding-top: 80px;
			.el-menu {
				height: 100%;
				// background-color: #e4e8f1;
				li {
					text-align: left;
				}
			}
		}
	}
</style>