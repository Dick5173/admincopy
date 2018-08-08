import Vue from 'vue'
import { UPDATE_TOPIC } from '../types'

const state = {
  data: null
}

const getters = {
  getAllTopic: state => {
    if (state.data) {
      return state.data
    } else {
      const topic = JSON.parse(window.localStorage.getItem('SET_TOPIC') || '{}')
      if (topic && topic.minprog_id) {
        Vue.$store.commit(UPDATE_TOPIC, topic)
        return topic
      }
    }
    return {}
  }
}

const mutations = {
  [UPDATE_TOPIC] (state, data) {
    window.localStorage.setItem('SET_TOPIC', JSON.stringify(data))
    state.data = data
  }
}

export default {
  state,
  getters,
  mutations
}
