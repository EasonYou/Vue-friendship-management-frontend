<template>
	<el-col :span="21" class="home-col slide">
		<div class="table-header">
			<h2 class="table-header-desc">总用户名单</h2>
			<el-button type="danger" :plain="true" @click="blockAll('block')">拉黑选中名单</el-button>
			<el-button type="success" :plain="true" @click="blockAll('unblock')">解封选中名单</el-button>
		</div>
		<el-table
		  class="slide"
	      :data="userLists"
	      border
	      style="width: 100%"
	      @selection-change="handleSelectionChange">
	      <el-table-column
	        type="selection"
	        fixed
	        width="50">
	      </el-table-column>
	      <el-table-column
	        prop="id"
	        label="id"
	        fixed
	        width="100">
	      </el-table-column>
	      <el-table-column
	        prop="state"
	        label="用户状态"
	        width="100">
	      </el-table-column>
	      <el-table-column
	        prop="nickname"
	        label="昵称"
	        width="150">
	      </el-table-column>
	      <el-table-column
	        prop="phone"
	        label="手机号码"
	        width="150">
	      </el-table-column>
	      <el-table-column
	        prop="email"
	        label="邮箱地址"
	        width="200">
	      </el-table-column>
	      <el-table-column
	        label="性别"
	        width="100"
	        :formatter="sexFilter">
	      </el-table-column>
	      <el-table-column
	        prop="birthday"
	        label="生日"
	        width="180">
	        <template scope="scope">
	        	{{ scope.row.birthday | dateFilter}}
	        </template>
	      </el-table-column>
	      <el-table-column
	        prop="be_focus"
	        label="关注数"
	        width="100">
	      </el-table-column>
	      <el-table-column
	        prop="address"
	        label="地址"
	        width="300"
	        show-overflow-tooltip>
	      </el-table-column>
	      <el-table-column
	        prop="birthday"
	        label="封号时间"
	        width="150">
	        <template scope="scope">
	        	{{ scope.row.dtime | dateFilter}}
	        </template>
	      </el-table-column>
	      <el-table-column
	        prop="birthday"
	        label="创建时间"
	        width="150">
	        <template scope="scope">
	        	{{ scope.row.ctime | dateFilter}}
	        </template>
	      </el-table-column>
	      <el-table-column
	        prop="birthday"
	        label="修改时间"
	        width="150">
	        <template scope="scope">
	        	{{ scope.row.mtime | dateFilter}}
	        </template>
	      </el-table-column>
		  <el-table-column
	        label="操作"
	        fixed="right"
	        width="160">
	        <template scope="scope">
		        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
		       	<el-button size="small" v-if="scope.row.state === 'valid'" type="danger" @click="handleBlock(scope.$index, scope.row)">黑名单</el-button>
		       	<el-button size="small" v-if="scope.row.state === 'invalid'"type="success" @click="unBlock(scope.$index, scope.row)">解封</el-button>
		     </template>
	      </el-table-column>
	    </el-table>
	    <el-pagination
	      :current-page="currentPage"
	      :page-size="2"
	      layout="prev, pager, next, jumper"
	      :total="totalPage"
	      @current-change="handleCurrentChange">
	    </el-pagination>
	</el-col>
</template>
<script>
	import FSMenu from '../components/FSMenu'
	import echarts from 'echarts'
	export default {
		data () {
			return {
				selection: []
			}
		},
		components: {
			FSMenu
		},
		computed: {
			userLists () {
				return this.$store.getters.userLists
			},
			totalPage () {
				return this.$store.getters.totalPage
			},
			currentPage () {
				return this.$store.getters.currentPage
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
			handleBlock (index, row) {
				this.$store.dispatch('block', {
					vue: this,
					row: [row]
				})
			},
			unBlock (index, row) {
				this.$store.dispatch('unblock', {
					vue: this,
					row: [row]
				})
			},
			blockAll (type) {
				if(this.selection.length === 0) {
					this.$message.error('请选择用户')
					return
				}
				this.$store.dispatch(type, {
					vue: this,
					row: this.selection
				})
			},
			unblockAll () {
				this.$store.dispatch('unblock', {
					vue: this,
					row: this.selection
				})
			},
			handleSelectionChange (value) {
				this.selection = value
			},
			sexFilter (row) {
				if(row.sex === 0 ) {
					return '男'
				}
				if(row.sex === 1) {
					return '女'
				}
				console.log(row)
			},
			handleCurrentChange (val) {
				this.$store.dispatch('getUserLists', {
					vue: this,
					page: val})
			}
		},
		filters: {
			dateFilter (value) {
				if(!value) {
					return '无'
				}
				let date = new Date(value * 1000)
				let y = date.getFullYear()
				let m = date.getMonth() + 1
				let d = date.getDate()
				return y + '-' + m + '-' + d
			}
		},
        created () {
            this.$store.dispatch('getUserLists', {
            	vue:this,
            	page: 1
            })
        },
		mounted () {
		}
	}
</script>
<style lang="scss">
.home-col {
	position: relative;
	padding: 0 30px;
	.el-table {
		margin-top: 60px;
		text-align: left;
		position: relative;
	}
	.table-header {
		width: 100%;
		float: right;
		margin: 10px 0;
		position: absolute;
		top: 0;
		.table-header-desc {
			float: left;
			line-height: 36px;
			display: inline-block;
			font-weight: lighter;
			text-align: left;
			margin: 0 0 0 20px;
		}
		.el-button {
			// margin-right: 15px;
			position: absolute;
			right: 60px;
		}
		.el-button:last-child {
			right: 180px;
		}
	}
	.el-pagination {
		margin-top: 10px;
		text-align: center;
	}
}
</style>