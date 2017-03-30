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
		getNumberRatio(contex, _) {
			var date = ['2017-6-6', '2016-6-7','2017-6-8', '2016-6-9','2017-6-10', '2016-6-11']
			var data = [1 , 2, 3, 4, 5, 6]
			_.options.xAxis.data = date
			_.options.series[0].data = data
			console.log(_.options)
			var myChart = echarts.init(document.getElementsByClassName('charts')[0]);
			myChart.setOption(_.options);
		}
	}
}