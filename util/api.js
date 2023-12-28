export const URL = 'https://car.wanyouyinqing.cn/'
const BASE_URL = URL
export const myRequest = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url,
			header: {
				// 'Content-Type': 'application/x-www-form-urlencoded',
				token: uni.getStorageSync('userinfo').token || ''
				// token: '534a3277-c60c-40a0-a4cb-2f2037da117f'
			},
			method: options.method || 'GET',
			data: options.data || {},
			success: (res) => {
				// if (res.data.data.code == 700) {
				// 	uni.showToast({
				// 		title: res.data.msg,
				// 		icon: "none",
				// 	})
				// 	setTimeout(function() {
				// 		uni.navigateTo({
				// 			url: "/pages/login/login?type=login"
				// 		})
				// 	}, 1000);
				// 	return
				// }
				resolve(res.data)
			},
			fail: (err) => {
				uni.showToast({
					title: 'error'
				})
				reject(err)
			}
		})
	})
}