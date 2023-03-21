<template>
	<view class="delicacy">
		<view class="delicacy-title">
			附近商家
		</view>
		<view class="delicacy-box">
			<view class="debox-left">
				<view class="demo demo-text">
					综合排序
				</view>
				<image src="@/static/coen/paixu.png" mode="widthFix"></image>
			</view>
			<view class="demo">销量高</view>
			<view class="demo">速度快</view>
			<view class="demo">津贴联盟</view>
			<view class="debox-left debox-right">
				<view class="demo demo-text">
					筛选
				</view>
				<image src="@/static/coen/shaixuan.png" mode="widthFix"></image>
			</view>
		</view>
		<!-- 综合条件筛选页面 -->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods:{
		}
		
	}
</script>

<style scoped lang="less">
	.delicacy {

		// 主题标签
		.delicacy-title {
			font-size: 35upx;
			height: 50upx;
			line-height: 50upx;
			margin: 20upx 0;
		}

		// 盒子
		.delicacy-box {
			display: flex;
			gap: 36upx;

			.debox-left {
				display: flex;
				align-items: center;

				image {
					width: 30upx;
					height: 30upx;
				}
			}

			.demo {
				font-size: 28upx;
				color: #7b7b7b;
			}

			.debox-right {
				justify-content: flex-end;
				flex-grow: 5;
			}
		}

		
	}
</style>
