import {
	myRequest
} from './api.js'

function wxLogin(success) {
	success({
		bool: true,
		openid: '123456'
	})
	return
	wx.login({
		success(res) {
			if (res.code) {
				getCode(res.code, success)
			} else {
				console.log('登录失败！' + res.errMsg)
			}
		}
	})
}

async function getCode(code, success) {
	const res = await myRequest({
		url: "/api/user/code2Session",
		method: "POST",
		data: {
			code
		}
	});
	success({
		bool: true,
		openid: '123456'
	})
}

function getAddress(success) {
	wx.chooseLocation({
		success: function(res) {
			let address = res.address;
			let regex =
				"(?<province>[^省]+省|.+自治区)(?<city>[^自治州]+自治州|[^市]+市|[^盟]+盟|[^地区]+地区|.+区划)(?<county>[^市]+市|[^县]+县|[^旗]+旗|.+区)?(?<town>[^区]+区|.+镇)?(?<village>.*)";
			const provinces = address.match(regex)[1];
			const citys = address.match(regex)[2];
			const districts = address.match(regex)[3];
			const addressss = address.match(regex)[5]
			success({
				address: res,
				addressArr: [provinces, citys, districts, addressss]
			})
		}
	})
}

function getCityByGaoDe(success) {
	let that = this
	wx.request({
		url: 'https://restapi.amap.com/v3/ip?key=5e05fdb98c6881c337d3431c0af7ffbb',
		success: function(res) {
			getLocation(success, res)
			console.log('getCityByGaoDe');
		}
	});
}

function getLocation(success, data) {
	uni.getLocation({
		type: 'gcj02',
		isHighAccuracy: true,
		geocode: true,
		success: function(res) {
			success(res, data)
		}
	})
}

async function getInit(success) {
	const res = await myRequest({
		url: "/api/index/init",
		method: "POST",
		data: {}
	});
	success(res)
}

async function renewal(success) {
	// const res = await myRequest({
	// 	url: "/api/user/index",
	// 	method: "POST",
	// 	data: {}
	// });
	// uni.setStorageSync('userinfo', res.data.userinfo)
	// success(res.data.userinfo)
}


module.exports = {
	wxLogin,
	getAddress,
	getCityByGaoDe,
	getInit,
	renewal
}