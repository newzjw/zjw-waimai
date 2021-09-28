import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import {Button} from 'mint-ui'
import './veeValidate' // 表单验证
import i18n from './i18n'
// mock
import './mock/mockServer'

import * as API from './api'
import router from './router'
import store from './store'
import GshopHeader from './components/GshopHeader/GshopHeader'
Vue.config.productionTip = false
Vue.component(Button.name, Button)
Vue.prototype.$API = API
// 把头部组件注册为公共组件
Vue.component('GshopHeader', GshopHeader)
new Vue({
  render: h => h(App),
  router,
  store,
  i18n
}).$mount('#app')
