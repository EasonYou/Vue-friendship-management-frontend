<template>
	<el-col :span="21" class="home-col">
		<el-table
	      :data="userLists"
	      border
	      style="width: 100%">
	      <el-table-column
	        prop="id"
	        label="id"
	        width="100">
	      </el-table-column>
	      <el-table-column
	        prop="nickname"
	        label="姓名"
	        width="150">
	      </el-table-column>
	      <el-table-column
	        prop="sex"
	        label="性别"
	        width="100">
	      </el-table-column>
	      <el-table-column
	        prop="birthday"
	        label="生日"
	        width="180">
	      </el-table-column>
	      <el-table-column
	        prop="be_focus"
	        label="关注数"
	        width="180">
	      </el-table-column>
	      <el-table-column
	        prop="address"
	        label="地址">
	      </el-table-column>
		  <el-table-column
	        label="操作"
	        width="180">
	        <template scope="scope">
		        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
		        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope)">删除</el-button>
		      </template>
	      </el-table-column>
	    </el-table>
	</el-col>
</template>
<script>
	import FSMenu from '../components/FSMenu'
	import echarts from 'echarts'
	export default {
		components: {
			FSMenu
		},
		computed: {
			userLists () {
				return this.$store.getters.userLists
			}
		},
		methods: {
			logout () {
				this.$store.dispatch('logout', this)
			},
			handleEdit (index, row) {
				console.log(index, row)
				this.$router.push({ name: 'Edit', params: {id: row.id}})
			},
			handleDelete (index, row) {
				console.log(index, row) 
			}
		},
		filters: {
			sexFilter () {
				if(value === 0 ) {
					return '男'
				}
			}
		},
        created () {
            this.$store.dispatch('getUserLists', this)
        },
		mounted () {
		}
	}
</script>
<style lang="scss">
.home-col {
	.el-table {
		text-align: left;
	}
}
</style>