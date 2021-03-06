import * as types from '../mutation-types'
import querystring from 'querystring'
import utility from 'utility'
import axios from 'axios'
export default {
	state: {
		userLists: {
			data: []
		},
		userDetail: {
			data: {}
		},
		totalPage: 1,
		currentPage: 1
	},
	getters: {
		token: state => {
			return state.token
		},
		userLists: state => {
			return state.userLists.data
		},
		userDetail: state => {
			return state.userDetail.data
		},
		totalPage: state => {
			return state.totalPage
		},
		currentPage: state => {
			return state.currentPage
		}
	},
	mutations: {
		LOGIN (state, token) {
			state.token = token
		},
		STORE_USER_LIST (state, data) {
			state.userLists.data = data
		},
		STORE_USER_DETAIL (state, data) {
			state.userDetail.data = data
		},
		CHANGE_PAGINATION (state, data) {
			state.totalPage = data
		}
	},
	actions: {
		login (contex, data) {
			let vue = data.vue
			console.log(data)
			axios.post('http://localhost:3000/api/login',{
				account: data.account,
				password: utility.md5(data.password)
			})
			.then(function (response) {
				console.log(response, 'res')
				if(response.data.status === 200) {
					localStorage.fs_admin_token = response.data.token
					contex.commit(types.LOGIN, response.data.token)
				 	vue.$router.push({ name: 'Home'})
				} else {
				    vue.$message.error('用户名或密码错误！');
				}
			})
			.catch(function (error) {
			console.log(error);
			});
		},
		logout (contex, vue) {
			console.log(vue)
			console.log('contex',contex)
			axios.post('http://localhost:3000/api/logout',{
				token: localStorage.fs_admin_token
			})
			.then(function(response) {
				if(response.data.status === 200) {
					vue.$message.success('登出成功！');
					vue.$router.push({ name: 'Login'})
					return
				}
				console.log('list', response)
				contex.commit(types.STORE_USER_LIST, response.data.data)
			})
		},
		getUserLists (contex, data) {
			console.log(data.type)
			contex.commit(types.STORE_USER_LIST, [])
			axios.post('http://localhost:3000/api/userLists',{
				token: localStorage.fs_admin_token,
				page: data.page
			})
			.then(function(response) {
				if(response.data.status !== 200) {
					data.vue.$message.error('登陆超时，请重新登陆！');
					data.vue.$router.push({ name: 'Login'})
					return
				}
				console.log('list', response)
				contex.commit(types.STORE_USER_LIST, response.data.data)
				contex.commit(types.CHANGE_PAGINATION, response.data.count)
			})
		},
		edit (contex, data) {
			axios.post('http://localhost:3000/api/userDetail/' + data.id,{
				token: localStorage.fs_admin_token,
				id: data.id
			})
			.then(function(response) {
				if(response.data.status !== 200) {
					data.vue.$message.error('获取列表失败！');
					data.vue.$router.push({ name: 'Home'})
					return
				}
				contex.commit(types.STORE_USER_DETAIL, response.data.data[0])
			})
		},
		block (contex, data) {
			console.log(data.row, 'hahaha')
			let rows = data.row
			let ids = []
			for(let i=0;i<rows.length;i ++) {
				ids.push(rows[i].id)
			}
			console.log(ids, 'heiheihei')
			let date = Date.parse(new Date())/1000
			axios.post('http://localhost:3000/api/block/',{
				token: localStorage.fs_admin_token,
				data: {
					id: ids,
					state: 'invalid',
					dtime: date
				}
			})
			.then(function(response) {
				// contex.dispatch('getUserLists', data.vue)
				if(response.data.status !== 200) {
					data.vue.$message.error('请重试');
					return
				}
				for(let i=0 ;i<data.row.length ; i++) {
					data.row[i].dtime = date
					data.row[i].state= "invalid"
				}
				data.row = []
				data.vue.$message.success('拉黑成功');
			})
		},
		unblock (contex, data) {
			let rows = data.row
			let ids = []
			for(let i=0;i<rows.length;i ++) {
				ids.push(rows[i].id)
			}
			axios.post('http://localhost:3000/api/block/',{
				token: localStorage.fs_admin_token,
				data: {
					id: ids,
					state: 'valid',
					dtime: 0
				}
			})
			.then(function(response) {
				// contex.dispatch('getUserLists', data.vue)
				if(response.data.status !== 200) {
					data.vue.$message.error('请重试');
					return
				}
				for(let i=0 ;i<data.row.length ; i++) {
					data.row[i].dtime = 0
					data.row[i].state= "valid"
				}
				console.log(data.row)
				data.vue.$message.success('解封成功');
			})
		},
		submitEdit (contex, vue) {
			let data = contex.state.userDetail.data
			console.log(data)
			axios.post('http://localhost:3000/api/userDataSubmit/' + data.id,{
				token: localStorage.fs_admin_token,
				data: {
					nickname: data.nickname,
					state: data.state,
					phone: data.phone,
					address: data.address,
					email: data.email,
					sex: data.sex,
					birthday: data.birthday
				}
			})
			.then(function(response) {
				console.log('shahahah')
				if(response.data.status !== 200) {
					vue.$message.error('请重试');
					return
				}
				vue.$message.success('修改成功！');
				vue.$router.push({ name: 'Home'})
			})
		}
	}
}