import * as types from '../mutation-types'
import axios from 'axios'
import echarts from 'echarts'
export default {
	state: {
		genderRatio: []
	},
	getters: {
		genderRatio: state => {
			return state.genderRatio
		}
	},
	mutations: {
		GET_GENDER_RATIO(state, data) {
			state.genderRatio = data
		}
	},
	actions: {
		getGenderRatio(contex, _) {
			axios.post('http://localhost:3000/api/charts/genderRatio', {
				token: localStorage.fs_admin_token
			})
			.then(function(response) {
				contex.commit(types.GET_GENDER_RATIO, response.data.data)
				_.options.title.text = '男女比例'
				_.options.series[0].data = response.data.data
				var myChart = echarts.init(document.getElementsByClassName('charts')[0]);
				console.log(_.genderRatio)
				myChart.setOption(_.options);
			})
		},
		getNumberLine(contex, _) {
			axios.post('http://localhost:3000/api/charts/numberLine', {
				token: localStorage.fs_admin_token
			})
			.then(function(response) {
				let data = response.data.data
				_.options.xAxis.data = data.dayResult
				_.options.series[0].data = data.numberResult
				_.options.title.text = '用户趋势图'
				console.log(_.options)
				var myChart = echarts.init(document.getElementsByClassName('charts')[0]);
				myChart.setOption(_.options);
			})
		}
	}
}