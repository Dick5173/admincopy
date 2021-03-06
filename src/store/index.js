import Vuex from 'vuex'
import Vue from 'vue'
import { isDebug } from 'src/util/env'
import createLogger from 'vuex/dist/logger'
import auth from './modules/auth'
import topic from './modules/topic'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    topic
  },
  strict: isDebug,
  plugins: isDebug ? [createLogger()] : []
})
