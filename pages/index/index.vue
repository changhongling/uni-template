<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
			
		</view>
		<view class="">
			<u-button type="primary">主要按钮</u-button>
			<u-button type="success">成功按钮</u-button>
			<u-button type="info">信息按钮</u-button>
		</view>
		<view class="ttt">
			就卡卡卡卡
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		onShow() {
			this.getInit()
			
		},
		methods: {
			async getInit() {
				const res = await this.$myRequest({
					url: "/api/index/index",
					method: "POST",
					data: {}
				});
				if (res.code == 1) {
					console.log('测试接口封装',res);
				}
			},
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.ttt{
		font-size: 45rpx;
		font-weight: 600;
		color: $uni-color-success;
	}
</style>
