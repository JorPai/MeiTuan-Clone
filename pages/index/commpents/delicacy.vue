<template>
	<view>
		<view class="delicacy">
			<view class="delicacy-box">
				<view class="debox-left" @click="sizeNameChange()">
					<view class="demo demo-text">
						{{sizeName}}
					</view>
					<image src="@/static/coen/paixu.png" mode="widthFix"></image>
				</view>
				<view class="demo" @click='saleRef()'>销量高</view>
				<view class="demo" @click='saleRef()'>速度快</view>
				<view class="demo" @click='saleRef()'>津贴联盟</view>
				<view class="debox-left debox-right" @click="scorllSet()">
					<view class="demo demo-text">
						筛选
					</view>
					<image src="@/static/coen/shaixuan.png" mode="widthFix"></image>
				</view>
			</view>
			<!-- 综合条件筛选页面 -->
			<view class="listIndex" v-if="drop">
				<block v-for="(item,index) in sortlist" :key="index">
					<view class="pageIndex" :class="{active: index == num}"
						@click="changBgName(index,item.name,item.screen,item.nums)">
						{{item.name}}
					</view>
				</block>
			</view>
			<!-- 筛选 -->
			<view class="listIndex scorllList" v-if="flagList">
				<block v-for="(item,index) in screendata" :key="index">
					<view>
						<view class="scollTittle">{{item.title}}</view>
						<view class="scollBtn">
							<block v-for="(itemDatas,indexs) in item.datas" :key="indexs">
								<view class="scollText" :class="{activBtn:itemDatas.id === 2}" @click="scollIdx(indexs,itemDatas.sign)">{{itemDatas.name}}</view>
							</block>
						</view>
					</view>
				</block>
				<!-- 单选 -->
				<block v-for="(item,index) in person" :key="index">
					<view>
						<view class="scollTittle">{{item.title}}</view>
						<view class="scollBtn">
							<block v-for="(itemDatas,indexs) in item.datas" :key="indexs">
								<view class="scollText" :class="{activBtn:indexs == subNum}" @click="personIdx(indexs,itemDatas.per)">{{itemDatas.name}}</view>
							</block>
						</view>
					</view>
				</block>
				<!-- 清空和完成 -->
				<veiw class="fixBtn">
					<view class="cleanBtn allBtn" @click="emty()">清空</view>
					<view class="finallyBtn allBtn" @click="comflag && comPlete()" :class="{'comPlete' : comple}">完成</view>
				</veiw>
			</view>
		</view>

		<!-- 透明背景 -->
		<view class="ying" v-if="ying" @click="backClear()"></view>
	</view>
</template>

<script>
	import bus from "../EventBus.js"
	import {
		sortPages,
		riceAten
	} from "@/api/api.js"
	export default {
		data() {
			return {
				comple:true,
				comflag:false,
				num: 0,
				sizeName: '综合排序',
				drop: false,
				flagList: false,
				ying: false,
				flag: true,
				screen: '',
				nums: 0,
				subNum:-1,
				multiobj:{},
				dataMul:{},
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
		methods: {
			// 综合排序显示隐藏
			sizeNameChange() {
				this.flag = !this.flag
				if (this.flag) {
					this.drop = true
					this.flagList = false
					this.backOne()
				} else {
					this.backClear()
				}
			},
			// 选择哪一个功能
			changBgName(index, name, screen, nums) {
				this.sizeName = name
				this.num = index
				this.backClear()
				// console.log(this.num);
				this.sortPage(screen, nums)
			},
			// 销量高，速度快...
			saleRef() {
				this.backClear()
			},
			// 筛选
			scorllSet() {
				this.flag = !this.flag
				if (this.flag) {
					this.flagList = true
					this.backOne()
					this.drop = false
				} else {
					this.backClear()
				}
			},
			// 背景显示隐藏
			backOne() {
				setTimeout(() => {
					this.ying = true
				})
			},
			backClear() {
				this.ying = false
				this.drop = false
				this.flagList = false
			},
			// 综合筛选点击筛选
			sortPage(screen, nums) {
				let Data = {
					screen,
					nums
				}
				sortPages(Data).then(e => {
					// 将接口的值存储到vuex
					this.$store.commit('screenmuta', e)
					// console.log(e);
				})
			},
			// 商家特色（多选效果）
			scollIdx(indexs,sign){
				// console.log(this.screendata[0].datas[indexs].id);
				if(this.screendata[0].datas[indexs].id === 1){
					// 选中
					this.screendata[0].datas[indexs].id = 2
					// this.$set给对象添加一个属性
					this.$set(this.multiobj,sign,sign)
					// console.log(this.multiobj);
				}else{
					// 未选中
					this.screendata[0].datas[indexs].id = 1
					// this.$delete删除对象的一个属性
					this.$delete(this.multiobj,sign)
					// console.log(this.multiobj);
				}
			},
			// 人均价单选实现
			personIdx(indexs,capita){
				if(this.subNum == indexs){
					// 未选中
					this.subNum = -1
					// this.$delete删除对象的一个属性
					this.$delete(this.multiobj,'capita')
					// console.log(this.multiobj)
				}else{
					// 选中
					this.subNum = indexs
					// this.$set给对象添加一个属性
					this.$set(this.multiobj,'capita',capita)
					// console.log(this.multiobj)
				}
			},
	
			// 清空选项功能
			emty(){
				// 清空商家特色的选项
				this.screendata.forEach(item => {
					item.datas.map( items => {
						// console.log(items);
						items.id = 1
						return items
					})
				})
				// 设置对象为空，是为了避免清楚再点击完成会用户按钮失效
				this.multiobj = {}
				// 清空人均单选
				this.subNum = -1
				// 关闭选项区域，返回主菜单
				this.backClear()
			},
			// 完成请求
			comPlete(){
				// let Data = {
				// 	dataMul:this.multiobj
				// }
				// console.log(Data);
				this.backClear()
				riceAten(this.multiobj).then(e => {
					console.log(e);
					this.$store.commit('screenmuta', e)
					bus.$emit('share', this.multiobj)
					console.log(this.multiobj);
				})
			}
		},
		mounted() {
			this.sortPage()
			// this.comPlete()
		},
		// 如果用户没有点击任何筛选条件，完成按钮应该被禁用
		computed:{
			comEmipy(){
				// this.multiobj如果是空对象，禁止点击完成按钮，反之可以点击
				let obj = JSON.stringify(this.multiobj) == '{}'
				if(obj == true){
					this.comple = true
					this.comflag = false
				}else{
					this.comple = false
					this.comflag = true
				}
			}
		}
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

	.comPlete{
		background-color: #b4b4b4!important;
		color: white!important;
	}

	.delicacy {
		width: 100%;
		padding: 10upx 0;
		background-color: white;
		position: absolute;
		left: 0;
		right: 0;
		z-index: 99;

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
				padding: 15upx;
			}

			.scollBtn {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-evenly;
				margin: 30upx 0 50upx;

				.scollText {
					width: calc((100% / 3)- 30upx);
					text-align: center;
					padding: 10upx 40upx;
					background-color: #e1e1e1;
					color: #7b7b7b;
				}
			}

			.fixBtn {
				width: 100%;
				display: flex;
				justify-content: space-between;
				position: absolute;
				left: 0;
				bottom: 0;

				.allBtn {
					width: calc(100%/2);
					text-align: center;
					height: 100upx;
					line-height: 100upx;
				}

				.cleanBtn {
					border-top: 1px solid #d8d8d8;
					background-color: white;
				}

				.finallyBtn {
					border-top: 1px solid #f0f000;
					background-color: #f0f000;
				}
			}
		}
	}

	.ying {
		background: rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
</style>
