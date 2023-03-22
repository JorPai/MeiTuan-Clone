<template>
	<view class="contBox">
		<Search></Search>
		<Preference :listY='listYx'></Preference>
		<Delicacy></Delicacy>
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
			this.preference()
		}
	}
</script>

<style lang="less" scoped>
	
</style>
