import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'

import router from './router'
import GshopHeader from './components/GshopHeader/GshopHeader'
Vue.config.productionTip = false

// 把头部组件注册为公共组件
Vue.component('GshopHeader', GshopHeader)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
