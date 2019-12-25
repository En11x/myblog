import Vue from 'vue'
import Vuex from 'vuex'



import common from './modules/common'

Vue.use(Vuex)

const modules = {common}

const store = new Vuex.Store({
    modules
})


export default store