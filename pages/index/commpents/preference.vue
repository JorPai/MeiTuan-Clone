<template>
	<view class="perferContent">
		<view class="starTitle">
			为你优选
		</view>
		<view class="scroll">
			<scroll-view class="scroll-view_H" scroll-x="true">
				<view class="scroll-list">
					<block v-for="(item,index) in listY" :key="index">
						<view class="scroll-view-item_H">
							<image :src="item.image" mode=""></image>
							<view>{{item.title}}</view>
							<view>{{item.lable}}</view>
						</view>
					</block>
				</view>
			</scroll-view>
		</view>
		<!-- <view>
			<button @click="anniu">测试</button>
		</view> -->
		
	</view>
</template>

<script>
	export default {
		props:{
			listY:Array
		},
		data() {
			return {
				
			}
		},
		methods: {
			// anniu(){
			// 	console.log(this.listYx)
			// }
		}
	}
</script>

<style scoped lang="less">
	.perferContent {
		margin-top: 28upx;

		.starTitle {
			font-size: 35upx;
			height: 50upx;
			line-height: 50upx;
			margin-bottom: 20upx;
		}
	}

	.scroll {
		.scroll-view_H {
			white-space: nowrap;
			width: 100%;
			height: 300upx;

			.scroll-list {
				display: flex;
				justify-content: space-between;
				view:nth-child(2){
					padding: 0 7upx !important;
				}
				.scroll-view-item_H {
					height: 300upx;
					width: 300upx;
					padding: 0 8upx;

					image {
						width: 300upx;
						height: 200upx;
						border-radius: 8upx;
					}

					view {
						height: 45upx;
						line-height: 45upx;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 1;
						overflow: hidden;
					}

					view:nth-child(2) {
						font-size: 27upx;
					}

					view:nth-child(3) {
						font-size: 27upx;
						color: #9c9c9c;
					}

				}
			}
		}

	}
</style>
