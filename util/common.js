function dateFormat(value) {
	var date = new Date(value * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
	var year = date.getFullYear();
	var month = ("0" + (date.getMonth() + 1)).slice(-2);
	var sdate = ("0" + date.getDate()).slice(-2);
	var hour = ("0" + date.getHours()).slice(-2);
	var minute = ("0" + date.getMinutes()).slice(-2);
	var second = ("0" + date.getSeconds()).slice(-2);
	// 拼接
	var result = year + "-" + month + "-" + sdate
	// + ' ' + hour + ':' + minute + ':' + second
	// 返回
	return result;
}

function distance(res) {
	var La1 = res.lat * Math.PI / 180.0;
	var La2 = res.latitude * Math.PI / 180.0;
	var La3 = La1 - La2;
	var Lb3 = res.lng * Math.PI / 180.0 - res.longitude * Math.PI / 180.0;
	var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(La3 / 2), 2) + Math.cos(La1) *
		Math.cos(La2) * Math
		.pow(Math.sin(Lb3 / 2), 2)));
	s = s * 6378.137;
	s = Math.round(s * 10000) / 10000;
	s = s.toFixed(2);
	console.log(s);
	return s + 'km';
}

module.exports = {
	dateFormat,
	distance
}