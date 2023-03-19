import store from '@/store/index.js'
import Vue from 'vue'

Vue.prototype.$store = store

const baseUrl = 'https://meituan.thexxdd.cn/api/'


export function doGetToken() {
	return uni.getStorageSync("token")
}

/* 加载动画 */
let needLoadingRequestCount = 0
export function showFullScreenLoading() {
	if (needLoadingRequestCount === 0) {
		startLoading()
	}
	needLoadingRequestCount++
}

export function tryHideFullScreenLoading() {
	if (needLoadingRequestCount <= 0) return
	needLoadingRequestCount--
	if (needLoadingRequestCount === 0) {
		endLoading()
	}
}

let loading

function startLoading() {
	store.commit('request_show_loading')
	uni.showLoading({
		title: '加载中'
	})
}

function endLoading() {
	store.commit('request_hide_loading')
	uni.hideLoading()
}

/* 请求 */
export function uniRequest(url, data, method, isShow, ct = 'application/x-www-form-urlencoded') {
	const retPromiseCbFunc = function(Resolve, Reject) {
		if (isShow) {
			showFullScreenLoading(); //开始加载
		}
		uni.request({
			data: data,
			url: baseUrl + url,
			method: method,
			header: {
				'Content-Type': ct,
				// 'Token': doGetToken(),
				// 'apitoken': doGetToken(),
				'Authorization': doGetToken(),
			},
			success: (res) => {
				console.log(111, res)
				/* 未授权 */
				if (res.data.msg == '登录成功') {
					// Resolve(res.data);
					uni.redirectTo({
						url: '/pages/index/index'
					})
				} else if(res.data.msg=='token不能为空'){
					// uni.showToast({
					// 	title:res.msg,
					// 	icon:'none'
					// })
					uni.showToast({
						title: '登陆失效',
						duration: 2000,
						complete:function (){
							uni.clearStorageSync();
							uni.reLaunch({
								url: '/pages/login/login'
							})
						}
					});
					// uni.clearStorageSync();
					// uni.reLaunch({
						
					// })
					
				} else{
					Resolve(res.data);
				}
				tryHideFullScreenLoading(); //结束加载
			},
			fail(res_fail) {
				uni.showModal({
					title: '抱歉',
					content: '请求服务器失败!',
					showCancel: false
				})
				tryHideFullScreenLoading(); //结束加载
			}
		});
	};
	const retPromise = new Promise(retPromiseCbFunc);
	return retPromise;
}

/* 请求 */
export function uniRequestMulti(url, data, method, isShow, ct = 'application/json') {
	const retPromiseCbFunc = function(Resolve, Reject) {
		if (isShow) {
			showFullScreenLoading(); //开始加载
		}
		uni.request({
			data: data,
			url: baseUrl + url,
			method: method,
			header: {
				'Content-Type': ct,
				'Token': doGetToken()
				// 'apitoken': doGetToken(),
			},
			success: (res) => {
				// console.log(res)
				/* 未授权 */
				if (res.data.msg == 'Must have token') {
					uni.redirectTo({
						url: '/pages/login/index'
					})
				} else {
					Resolve(res.data);
				}
				tryHideFullScreenLoading(); //结束加载
			},
			fail(res_fail) {
				uni.showModal({
					title: '抱歉',
					content: '请求服务器失败!',
					showCancel: false
				})
				tryHideFullScreenLoading(); //结束加载
			}
		});
	};
	const retPromise = new Promise(retPromiseCbFunc);
	return retPromise;
}
