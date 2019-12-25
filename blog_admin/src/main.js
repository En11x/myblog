// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import photoPreview from './components/photoPreview'
import base from '../static/js/base'

if (process.env.NODE_ENV === 'development') {
    require('./elementUI/elementUI')
}

Vue.config.productionTip = false

Vue.use(photoPreview)
Vue.use(base)

Vue.prototype.$toast = (msg,type = 'success') =>{
    Vue.prototype.$message({
        showClose:true,
        message:msg,
        type:type
    })
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
