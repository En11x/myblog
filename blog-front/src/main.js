import Vue from 'vue'
import App from './App'
import router from './router'
import less from 'less'
import '../static/css/base.css'
import animate from "animate.css"

Vue.config.productionTip = false

Vue.use(less)
Vue.use(animate)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
