<template>
	<view class="contBox">
		<Search></Search>
		<Preference :listY='listYx'></Preference>
		<view @click="pageScorll()" :catchtouchmove='true'>
			<Delicacy id="sorllId" :class="{'isFixed' : flag}"></Delicacy>
		</view>
		<Talkout :delicacyList='delicacyList'></Talkout>
		<Title></Title>
	</view>
</template>

<script>
	import Search from "@/pages/index/commpents/search.vue"
	import Preference from "@/pages/index/commpents/preference.vue"
	import Title from "@/pages/index/commpents/title.vue"
	import Delicacy from "@/pages/index/commpents/delicacy.vue"
	import Talkout from "@/pages/index/commpents/talkout.vue"

	import {
		pageIndex,
		shopList
	} from "@/api/api.js"

	import {
		mapState
	} from 'vuex'
	export default {
		components: {
			Search,
			Preference,
			Title,
			Delicacy,
			Talkout
		},
		data() {
			return {
				flag: false,
				menutop: '',
				topdata: '',
				delicacyPage: '',
				listYx: [],
				delicacyList: []
			}
		},
		onLoad() {

		},
		methods: {
			preference() {
				pageIndex().then(e => {
					this.listYx = e
					// console.log(this.listYx);
				});
				shopList().then(e => {
					// console.log(e);
					this.delicacyList = e
					console.log(this.delicacyList);
				})
			},
			pageScorll() {
				wx.pageScrollTo({
					scrollTop: this.topdata,
					duration: 300
				})
			}
		},
		mounted() {
			this.preference();
		},
		// 监听值
		onLoad() {
			const query = wx.createSelectorQuery();
			query.select('#sorllId').boundingClientRect().exec((res) => {
				// console.log(res[0]);
				this.menutop = Math.floor(res[0].top)
				// console.log(this.menutop);
				this.topdata = Math.floor(res[0].top)
				// console.log(this.topdata)

			});
		},
		// 监听页面滚动
		onPageScroll(e) {
			this.delicacyPage = Math.floor(e.scrollTop)
			// console.log(this.delicacyPage);
		},
		// 计算属性
		computed: {
			// 监听筛选组件置顶和不置顶
			namepage() {
				// console.log('我是自动执行的')
				// 如果页面滚动的高度大于筛选组件距离顶部的高度，那就置顶，反之不置顶
				if (this.delicacyPage > this.menutop) {
					console.log('置顶')
					this.flag = true
				} else {
					// console.log('不置顶')
					this.flag = false
				}
			},
			// 获取state的值
			...mapState(['screenarr']),
			// 筛选商家赋值
			count(){
				this.delicacyList = this.screenarr
			}
		}
	}
</script>

<style lang="less" scoped>
	.isFixed {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
	}
</style>
