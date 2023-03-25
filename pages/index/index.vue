<template>
	<view class="contBox">
		<Search></Search>
		<Preference :listY='listYx'></Preference>
		<Delicacy id="sorllId" :class="{'isFixed' : flag}"></Delicacy>
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
				flag:false,
				menuTop:'',
				topdata:'',
				delicacyPage:'',
				listYx: [],
				delicacyList:[]
			}
		},
		onLoad() {

		},
		methods: {
			 preference(){
				pageIndex().then(e => {
					this.listYx = e
					// console.log(this.listYx);
				});
				shopList().then(e =>{
					// console.log(e);
					this.delicacyList = e
				})
			}
		},
		mounted() {
			this.preference();
		},
		// 监听值
		onLoad(){
			const query = uni.createSelectorQuery();
			query.select('#sorllId').boundingClientRect().exec((res) => {
				this.menutop =Math.floor(res[0].top) 
				console.log(this.menutop);
				// this.topdata = res[0].top
			});
		},
		// 监听页面滚动
		onPageScroll(e){
			this.delicacyPage = Math.floor(e.scrollTop) 
			console.log(this.delicacyPage);
		},
		computed:{
			// 计算判断是否固定
			delicacyScoll(){
				if(this.delicacyPage > this.menuTop){
					this.flag = true
				}else{
					this.flag = false
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.isFixed{
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
	}
</style>
