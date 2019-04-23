/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'//所有的路由模块

Vue.use(VueRouter)//声明路由

export default new VueRouter({
  mode: 'history', // 去除路径中的#
  // 应用中所有路由
  routes
})
