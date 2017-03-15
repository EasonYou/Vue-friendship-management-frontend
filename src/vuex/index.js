import Vuex from 'vuex'
import Vue from 'vue'
import userData from './modules/user-data'
import chartsData from './modules/charts-data'
Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		userData,
		chartsData
	}
})