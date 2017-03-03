import * as types from '../mutation-types'
import querystring from 'querystring'
import utility from 'utility'
import axios from 'axios'
export default {
	state: {
		token:'d6526b38fdf5470b7a0c0c45ce24551a',
		userLists: {
			data: {}
		}
	},
	getters: {
		token: state => {
			return state.token
		},
		userLists: state => {
			return state.userLists.data
		}
	},
	mutations: {
		LOGIN (state, token) {
			state.token = token
		},
		STORE_USER_LIST (state, data) {
			state.userLists.data = data
		}
	},
	actions: {
		login (contex, data) {
			let vue = data.vue
			axios.post('http://localhost:3000/api/login',querystring.stringify({
				account: data.account,
				password: utility.md5(data.password)
			}))
			.then(function (response) {
			if(response.data.status === 200) {
				document.cookies = "token=" + response.data.token
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
		getUserLists (contex, vue) {
			console.log('contex',contex)
			axios.post('http://localhost:3000/api/userLists',querystring.stringify({
				token: contex.getters.token
			}))
			.then(function(response) {
				if(response.data.status !== 200) {
					vue.$message.error('登陆超时，请重新登陆！');
					vue.$router.push({ name: 'Login'})
					return
				}
				console.log('list', response)
				contex.commit(types.STORE_USER_LIST, response.data.data)
			})
		}
	}
}