import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

import {
	URL,
	myRequest
} from 'util/api.js'

Vue.prototype.$myRequest = myRequest
Vue.prototype.URL = URL

import uView from './uni_modules/uview-ui/index.js'
Vue.use(uView)

// 方法(自定义封装一些常用的方法，直接挂载在Vue的原型链上)
// 跳转
Vue.prototype.goNavigateTo = function(url) {
	uni.navigateTo({
		url: url
	});
}

// 返回
Vue.prototype.goNavigateBack = function(url) {
	let back = getCurrentPages();
	if (back && back.length > 1) {
		uni.navigateBack({
			delta: 1,
		});
	} else {
		history.back();
	}
}


// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif