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
export function sortPages(data){
	return uniRequest('forshop/starting',data,'POST',true)
}
// 筛选接口
export function riceAten(data){
	return uniRequest('forshop/multiple',data,'POST',true)
}