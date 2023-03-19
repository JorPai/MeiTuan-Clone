import {uniRequest} from '@/api/uniRequest.js'

/* 首页 */
export function pageIndex() {
	return uniRequest('forshop/getprefer','GET', true);
}
