import Vuex from 'vuex'
import Vue from 'vue'
import homePage from './modules/home-page'
Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		homePage
	}
})