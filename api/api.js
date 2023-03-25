import {uniRequest} from '@/api/uniRequest.js'

/* 首页 */
export function pageIndex() {
	return uniRequest('forshop/getprefer','GET', true);
}
/* 商家数据 */
export function shopList(){
	return uniRequest('forshop/wxshop','GET',true)
}
// 排序
export function sortPages(){
	return uniRequest('forshop/starting','POST',true)
}