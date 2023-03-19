<template>
	<view class="perferContent">
		<view class="starTitle">
			为你优选
		</view>
		<view class="scroll">
			<scroll-view class="scroll-view_H" scroll-x="true">
				<view class="scroll-list">
					<block v-for="(item,index) in listYx" :key="index">
						<view class="scroll-view-item_H">
							<image :src="item.image" mode=""></image>
							<view>{{item.title}}</view>
							<view>{{item.lable}}</view>
						</view>
					</block>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listYx: [{
						"_id": "5e62a709323c041a40563e08",
						"image": "http://lstkk.oss-cn-beijing.aliyuncs.com/meituan/public%5Cuploads%5C1583523592580.png",
						"title": "特别推荐",
						"lable": "早餐必备"
					},
					{
						"_id": "5e63b1b059eb7e2bff8479b6",
						"image": "http://lstkk.oss-cn-beijing.aliyuncs.com/meituan/public/uploads/1583591856704.png",
						"title": "甜蜜藕合",
						"lable": "甜品美食"
					},
					{
						"_id": "5ea1f37257a0754524b5719e",
						"title": "可口饺子",
						"lable": "早餐营养",
						"image": "http://lstkk.oss-cn-beijing.aliyuncs.com/meituan/public%5Cuploads%5C1587671921472.png"
					},
					{
						"_id": "60a384cfc2ec5207cfe9c07e",
						"image": "http://lstkk.oss-cn-beijing.aliyuncs.com/meituan/public/uploads/1621329103647.jpg",
						"title": "火锅",
						"lable": "好吃美味"
					},
					{
						"_id": "60a384d8c2ec5207cfe9c07f",
						"image": "https://lstkk.oss-cn-beijing.aliyuncs.com/meituan/shuanyangrou.webp",
						"title": "涮羊肉",
						"lable": "肉质鲜嫩"
					}
				]
			}
		},
		method: {

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
