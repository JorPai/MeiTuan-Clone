<template>
	<view>
		<!-- 导航区域 -->
		<view class="section-nav">
			<image src="@/static/coen/dizhi.png" alt="" mode="widthFix"></image>
			<view class="nav-text">成都市金牛区春熙路东原大厦</view>
			<span>></span>
		</view>
		<!-- 搜索区域 -->
		<view class="section-search">
			<view class="search-top">
				<image src="@/static/coen/sousuo.svg" mode="widthFix"></image>
				<input type="text" placeholder="麻辣烫" disabled />
			</view>
		</view>
		<!-- 轮播区域 -->
		<view class="section-swiper">
			<swiper :autoplay="false" :interval="1000" :duration="1000">
				<block v-for="(item,index) in lable" :key="index">
					<swiper-item>
						<view class="swiper-item">
							<block v-for="(listdata,index) in item" :key="index">
								<view class="conteng-img">
									<image :src="listdata.img" mode="widthFix" class="uploadimg"></image>
									<text>{{listdata.title}}</text>
								</view>
							</block>
						</view>
					</swiper-item>
				</block>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 轮播数组
				lable: [
									[
										{
											'img':'../../../static/inster/meishi.png',
											'title':'美食'
										},
										{
											'img':'../../../static/inster/chaoshi.png',
											'title':'超市便利'
										},
										{
											'img':'../../../static/inster/shuiguo.png',
											'title':'蔬菜水果'
										},
										{
											'img':'../../../static/inster/meituan.png',
											'title':'美团专送'
										},
										{
											'img':'../../../static/inster/paotui.png',
											'title':'跑腿代购'
										},
										{
											'img':'../../../static/inster/yexiao.png',
											'title':'夜宵'
										},
										{
											'img':'../../../static/inster/jintie.png',
											'title':'津贴联盟'
										},
										{
											'img':'../../../static/inster/pinping.png',
											'title':'甜点饮品'
										},
										{
											'img':'../../../static/inster/shaokao.png',
											'title':'龙虾烧烤'
										},
										{
											'img':'../../../static/inster/dangao.png',
											'title':'甜蜜蛋糕'
										}
									],
									[
										{
											'img':'../../../static/inster/hanbao.png',
											'title':'汉堡披萨'
										},
										{
											'img':'../../../static/inster/liaoli.png',
											'title':'日韩料理'
										},
										{
											'img':'../../../static/inster/malatang.png',
											'title':'麻辣烫'
										},
										{
											'img':'../../../static/inster/kuaican.png',
											'title':'快食简餐'
										},
										{
											'img':'../../../static/inster/xianhua.png',
											'title':'浪漫鲜花'
										},
										{
											'img':'../../../static/inster/lazi.png',
											'title':'无辣不欢'
										},
										{
											'img':'../../../static/inster/jiaozi.png',
											'title':'饺子馆'
										},
										{
											'img':'../../../static/inster/xiaochi.png',
											'title':'小吃馆'
										},
										{
											'img':'../../../static/inster/baofan.png',
											'title':'煲仔饭'
										},
										{
											'img':'../../../static/inster/qita.png',
											'title':'其他'
										}
									]
								]
			}
		}
	}
</script>

<style scopedn lang="less">
	.display(@dispaly: flex, @align: center) {
		display: @dispaly;
		align-items: @align;
	}

	// 定义公共小图标的变量
	@imgicon-width: 35upx;
	@imgicon-height: 35upx;

	.section-nav {
		display: flex;
		align-items: center;
		gap: 15upx;
		margin-top: 15upx;

		image {
			width: @imgicon-width;
			height: @imgicon-height;
			background-color: yellow;
		}

		.nav-text {
			font-weight: bold;
			font-size: 32upx;
		}

		span {
			font-weight: bold;
		}
	}

	.section-search {
		position: relative;
		margin: 20upx 0;

		image {
			width: @imgicon-width;
			height: @imgicon-height;
			position: absolute;
			top: 30%;
			left: 2%;
		}

		input {
			background-color: antiquewhite;
			border-radius: 8upx;
			padding: 12upx 60upx;
			font-size: 32upx;
		}
	}
	
	.section-swiper{
		.swiper-item{
			display: flex;
			flex-wrap: wrap;
			.conteng-img{
				width: calc((100% / 5) - 12px) !important;
				margin: 6px;
				text-align: center;
				.uploadimg{
					width: 60upx;
					height: 60upx;
				}
				text{
					display: block;
					font-size: 28upx;
				}
			}
		}
	}
</style>
