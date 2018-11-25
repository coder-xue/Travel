import Vue from 'vue';
import Vuex from 'vuex';
import state from './state.js';
import mutations from './mutations';

Vue.use(Vuex);

//导出仓库
export default new Vuex.Store({ 
	//存放全局公用数据
	state,

	// actions: {
	// 	changeCity(cxt, city) {
	// 		//调用mutations的changeCity方法，并传入参数city
	// 		cxt.commit('changeCity', city); 
	// 	}
	// },

	mutations
})