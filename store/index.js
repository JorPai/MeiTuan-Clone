import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		requestLoading: false, //加载等待是否显示
	},
	getters:{
		
	},
	mutations:{
		//显示请求加载动画
		request_show_loading(state) {
			state.requestLoading = true;
		},
		//隐藏请求加载动画
		request_hide_loading(state) {
			state.requestLoading = false;
		},
	},
	actions:{},
	modules:{}
})