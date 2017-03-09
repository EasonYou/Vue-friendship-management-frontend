<template>
	<el-col :span="21" class="edit-col">
		<el-form  label-position="top" label-width="80px" :model="userDetail">
		  <el-form-item label="用户名">
		    <el-input v-model="userDetail.nickname"></el-input>
		  </el-form-item>
		  <el-form-item label="用户状态">
		    <el-radio class="radio" v-model="userDetail.state" label="valid" >激活状态</el-radio>
  			<el-radio class="radio" v-model="userDetail.state" label="invalid">封号状态</el-radio>
		  </el-form-item>
		  <el-form-item label="手机号码">
		    <el-input v-model="userDetail.phone"></el-input>
		  </el-form-item>
		  <el-form-item label="邮箱地址" prop="email"
		  	:rules="[
		      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
		      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
		    ]">
		    <el-input v-model="userDetail.email"></el-input>
		  </el-form-item>
		  <el-form-item label="地址">
		    <el-input v-model="userDetail.address"></el-input>
		  </el-form-item>
		  <el-form-item label="性别（0男1女）">
		    <el-input v-model="userDetail.sex"></el-input>
		  </el-form-item>
		  <el-form-item label="生日">
		    <el-input v-model="userDetail.birthday"></el-input>
		  </el-form-item>
		  <el-form-item label="封面图片地址">
		    <el-input :disabled="true" v-model="userDetail.pic_cover"></el-input>
		  </el-form-item>
		  <el-form-item label="头像图片地址">
		    <el-input :disabled="true" v-model="userDetail.pic_cover"></el-input>
		  </el-form-item>
		  <el-form-item label="未读信息">
		    <el-input :disabled="true" v-model="userDetail.information_unread"></el-input>
		  </el-form-item>
		  <el-form-item label="创建时间">
		    <el-input :disabled="true" v-model="userDetail.ctime"></el-input>
		  </el-form-item>
		  <el-form-item label="修改时间">
		    <el-input :disabled="true" v-model="userDetail.mtime"></el-input>
		  </el-form-item>
		  <el-form-item label="删除时间">
		    <el-input :disabled="true" v-model="userDetail.dtime"></el-input>
		  </el-form-item>
		  <el-form-item>
		  	<el-button type="primary" @click="submitForm('userDetail')">保存</el-button>
		  </el-form-item>
		</el-form>
		
	</el-col>
</template>
<script>
	export default {
	computed: {
		userDetail () {
			return this.$store.getters.userDetail
		}
	},
	created() {
		let id = this.$route.params.id
		this.$store.dispatch('edit', {
			vue: this,
			id: id
		})
	},
	methods: {
		submitForm (formName) {
			this.$store.dispatch('submitEdit', this)
		}
	},
	filters: {
		dateFilter (value) {
			if(!value) {
				return '无'
			}
			let date = new Date(value * 100)
			let y = date.getFullYear()
			let m = date.getMonth() + 1
			let d = date.getDate()
			return y + '-' + m + '-' + d
		}
	}
}
</script>
<style lang="scss">
.edit-col {
	padding: 40px 20%;
	.el-form {
		position: relative;
		text-align: left;
		margin-bottom: 200px;
		padding: 80px;
		box-shadow: 0 0 30px rgba(0,0,0,0.3);
		.el-button {
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
		}
	}
}
</style>