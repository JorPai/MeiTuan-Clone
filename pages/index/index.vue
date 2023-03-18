<template>
	<view class="contBox">
		<Search></Search>
		<Preference></Preference>
		<Title></Title>
		<Delicacy></Delicacy>
		<Talkout></Talkout>
	</view>
</template>

<script>
	import Search from "@/pages/index/commpents/search.vue"
	import Preference from "@/pages/index/commpents/preference.vue"
	import Title from "@/pages/index/commpents/title.vue"
	import Delicacy from "@/pages/index/commpents/delicacy.vue"
	import Talkout from "@/pages/index/commpents/talkout.vue"
	
	export default {
		components:{
			Search,
			Preference,
			Title,
			Delicacy,
			Talkout
		},
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped>
	.contBox{
		margin: 0 15upx;
	}
</style>
