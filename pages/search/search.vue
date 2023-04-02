<template>
	<view class="searchPage">
		<!-- 搜索栏 -->
		<view class="topSearch">
			<view class="searchInput">
				<input type="text" confirm-type="search" placeholder="请输入关键词" :focus="focus" @confirm="onKeyInput"/>
			</view>
			<view class="searchText">
				搜索
			</view>
		</view>
		<!-- 搜索历史 -->
		<view class="hostory"></view>
		<!-- 展示项目 -->
		<view class="checkPage"></view>
	</view>
</template>

<script>
export default{
	data(){
		return{
			focus: false,
		}
	},
	methods:{
		
	}
}
</script>

<style scoped lang="less">
	.searchPage {
		padding:0 20rpx;

		.topSearch {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 70rpx;
			padding: 30rpx 0;
			.searchInput {
				height: 70rpx;
				line-height: 70rpx;
				width: 85%;
				background: #f8f8f8;
				border-radius: 20rpx;
				margin-left: 20rpx;

				input {
					height: 70rpx;
					line-height: 70rpx;
					width: 100%;
					font-size: 30rpx;
					color: #666666;
					padding-left: 30rpx;
				}
			}
			.searchText {
				font-size: 30rpx;
			}
		}
	}
</style>
