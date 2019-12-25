import {
    IS_ADMIN_WRAP
} from '../mutation-types'

const state = {
    //是否是后台管理
    isAdminWrap:false
}

const getters = {
    isAdminWrap(state){
        return state.isAdminWrap
    }
}

const mutations={
    [IS_ADMIN_WRAP](state,data){
        state.isAdminWrap = data
    }
}

const actions = {
    setIsAdminWrap ({commit}, isAdminWrap) {
        commit(IS_ADMIN_WRAP,isAdminWrap)
      },
}

export default {
    state,
    mutations,
    actions,
    getters
  }
