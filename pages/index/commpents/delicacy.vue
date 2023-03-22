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
		<view class="listIndex" v-if="drop">
			<block v-for="(item,index) in sortlist" :key="index">
				<view class="pageIndex">{{item.name}}</view>
			</block>
		</view>
		<!-- 筛选 -->
		<view class="listIndex scorllList" v-if="flagList">
			<block v-for="(item,index) in screendata" :key="index">
				<view>
					<view class="scollTittle">{{item.title}}</view>
					<view class="scollBtn">
						<block v-for="(itemDatas,index) in item.datas" :key="index">
							<view class="scollText">{{itemDatas.name}}</view>
						</block>
					</view>
				</view>
			</block>
			<!-- 单选 -->
			<block v-for="(item,index) in person" :key="index">
				<view>
					<view class="scollTittle">{{item.title}}</view>
					<view class="scollBtn">
						<block v-for="(itemDatas,index) in item.datas" :key="index">
							<view class="scollText">{{itemDatas.name}}</view>
						</block>
					</view>
				</view>
			</block>
			<!-- 清空和完成 -->
			<veiw class="fixBtn">
				<view class="cleanBtn allBtn">清空</view>
				<view class="finallyBtn allBtn">完成</view>
			</veiw>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				flag: false,
				flagList:false,
				sortlist: [{
						"name": "综合排序",
						"screen": "_id",
						"nums": 1
					},
					{
						"name": "起送价最低",
						"screen": "delivering",
						"nums": 1
					},
					{
						"name": "配送费最低",
						"screen": "physical",
						"nums": 1
					},
					{
						"name": "人均高到低",
						"screen": "capita",
						"nums": -1
					},
					{
						"name": "人均低到高",
						"screen": "capita",
						"nums": 1
					}
				],
				// 多选
				screendata: [{
					"title": "商家特色(可多选)",
					"datas": [{
							"id": 1,
							"sign": 'duration',
							"name": '配送最快'
						},
						{
							"id": 1,
							"sign": 'deliver',
							"name": '0元起送'
						},
						{
							"id": 1,
							"sign": 'physi',
							"name": '免配送费'
						}
					],
				}],
				// 人均价筛选
				person: [{
					"title": "人均价",
					"datas": [{
							"name": "20元以下",
							"per": {
								"$lt": 20
							},
						},
						{
							"name": "20-40元",
							"per": {
								"$lte": 40,
								"$gte": 20
							},
						},
						{
							"name": "40元以上",
							"per": {
								"$gt": 40
							},
						},
					]
				}],
			}
		},
		methods: {}

	}
</script>

<style scoped lang="less">
	.active {
		color: #f0f000;
	}

	.activBtn {
		background-color: #fef6df !important;
		color: #f29909 !important;
	}

	.delicacy {

		// 主题标签
		.delicacy-title {
			font-size: 35upx;
			height: 50upx;
			line-height: 50upx;
			margin: 20upx 15upx;
		}

		// 盒子
		.delicacy-box {
			margin: 0 15upx;
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

		//综合条件筛选
		.listIndex {
			width: 100%;
			padding: 10upx 0 60upx;

			.pageIndex {
				padding: 16upx 15upx;
				border-top: 1px solid #b4b4b4;
			}
		}

		.scorllList {
			background-color: white;
			height: 700upx;
			position: relative;
			.scollTittle {
				
			}

			.scollBtn {
				display: flex;
				justify-content: space-evenly;

				.scollText {
					width: calc((100% / 3)- 30upx);
					text-align: center;
					padding: 10upx 40upx;
					background-color: #e1e1e1;
					color: #7b7b7b;
				}
			}
			.fixBtn{
				width: 100%;
				display: flex;
				justify-content: space-between;
				position: absolute;
				left: 0;
				bottom: 0;
				.allBtn{
					width: calc(100%/2);
					text-align: center;
					height: 100upx;
					line-height: 100upx;
				}
				.cleanBtn{
					border-top:1px solid #d8d8d8;
					background-color: white;
				}
				.finallyBtn{
					border-top:1px solid #f0f000;
					background-color: #f0f000;
				}
			}
		}
	}
</style>
