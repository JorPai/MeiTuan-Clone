<template>
	<!-- 列表 -->
	<view class="delicacyList">
		<view v-if="flag">
			<block v-for="(item,index) in delicacyList" :key="id">
				<view class="delicacyList-box">
					<!-- left -->
					<image class="List-left" :src="item.logo" mode="widthFix"></image>
					<!-- right -->
					<view class="right">
						<view class="listTitle">{{item.shop}}</view>
						<view class="listTop">
							<text>月售200</text>
							<text class="topRight">约{{item.duration}}分钟</text>
						</view>
						<view class="listMid">
							<text>起送￥{{item.delivering}}</text>
							<text>配送￥{{item.physical}}</text>
							<text>人均{{item.capita}}</text>
						</view>
						<view class="listBot">
							<image src="@/static/tab/dingdana.png" mode="widthFix"></image>
							<text>{{item.types}}</text>
						</view>
					</view>
				</view>
			</block>
		</view>
		<view class="emipty" v-else>
			当前区域无数据请求
		</view>
	</view>
</template>

<script>
	import bus from "../EventBus.js"
	export default {
		props: {
			delicacyList: Array
		},
		data() {
			return {
				flag: true,
				mulobj: {}
			}
		},
		created() {
			bus.$on('share', val => {
				this.mulobj = val
				console.log(this.mulobj);
			})
		},
		computed: {
			deliWatch() {
				let sucObj = JSON.stringify(this.mulobj) == '{}'
				if (sucObj == true) {
					this.flag = true
				} else {
					this.flag = false
				}
			}

		}
	}
</script>

<style scoped lang="less">
	// 列表
	.delicacyList {
		margin: 70upx 15upx;

		.delicacyList-box {
			width: 100%;
			margin-top: 20upx;
			padding: 4upx 0;
			border-bottom: 2upx solid #bababa;
			display: flex;

			.List-left {
				width: 180upx;
				height: 180upx;
				border-radius: 16upx;
				margin-right: 12upx;
			}

			.right {
				width: calc(100% - 160upx);

				text {
					font-size: 24upx;
					color: #7b7b7b;
				}

				.listTitle {
					font-size: 36upx;
					font-weight: bold;
					margin-bottom: 10upx;
				}

				.listTop {
					display: flex;
					justify-content: space-between;
				}

				.listMid {
					display: flex;
					gap: 60upx;
					margin: 10upx 0;
				}

				.listBot {
					display: flex;
					align-items: center;

					image {
						width: 24upx;
						height: 20upx;
						margin-right: 8upx;
					}
				}
			}
		}

		.emipty {
			height: 260upx;
			text-align: center;
			line-height: 260upx;
			font-size: 34upx;
			font-style: italic;
			color: #bababa;
		}
	}
</style>
