import { UPDATE_ME } from '../types'

const state = {
  me: null
}

const getters = {
  isLogin: state => {
    if (state.me && state.me.id) {
      return true
    }
    return false
  },
  currentTenant: state => {
    if (state.me) {
      return {nick_name: state.me.nick_name, head_img: state.me.head_img}
    } else {
      return {}
    }
  },
  isAuthorize: state => {
    console.log(state.me)
    if (state.me && state.me.app_count > 0) {
      return true
    }
    return false
  },
  isRefundAuthorize: state => {
    return true
  }
}

const mutations = {

  [UPDATE_ME] (state, me) {
    state.me = me
  }
}

export default {
  state,
  getters,
  mutations
}
