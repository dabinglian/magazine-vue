import Vue from 'vue'
import VueRouter from 'vue-router'
import List from './list.js'
import Page from './page.js'
import Config from './site-config.js'

console.log(Config)

const configs = '13'

//导入路由组件
const ListRoute = {
	template: '<List message="hello"></List>'
};


//定义路由
const routes = [
	{
		path: '/list',
		component: ListRoute
	},
	{
		path: '/page',
		component: Page
	}
];

//创建router实例
const router = new VueRouter({
	routes
});

Vue.use(VueRouter);

const app = new Vue({
	router,
	template: `
		<div class="app">
			<router-view v-bind:config="configs"></router-view>
		</div>
	`,
	data: {
		configs: configs
	}
}).$mount("#app");
