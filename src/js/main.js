import Vue from 'vue'
import VueRouter from 'vue-router'
import List from './list.js'
import Page from './page.js'
import Config from './site-config.js'

//引入公共样式
import RestCss from '../css/reset.css'
import CommonCss from '../css/common.css'

//定义路由
const routes = [
    {
        path: '/list',
        component: List
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

Vue.component('my-component', {
    data: function(){
        return {
            config : Config
        }
    },
    template: `
        <div class="app">
            <router-view v-bind:config="config"></router-view> 
        </div>
    `
});
// 创建根实例
new Vue({
    router,
    el: '#app'
});