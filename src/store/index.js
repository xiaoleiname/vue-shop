/*
vuex最核心的管理对象: store
 */
import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import msite from './modules/msite'
import user from './modules/user'
import shop from './modules/shop'


Vue.use(Vuex)

export default new Vuex.Store({

  actions,
  getters,
  modules: {
    msite,
    user,
    shop
  }

})
/*

 总state结构:
 {
 msite: {},
 user: {},
 shop: {},
 }

 state.msite.address  取地址信息对象
 state.user.user   得到地址信息 信息对象的标识名称user
 */
