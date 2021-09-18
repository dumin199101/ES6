import Vue from 'vue'
import Vuex from 'vuex'
import studentModule from './studentModule'


Vue.use(Vuex)


export default new Vuex.Store({
    modules:{
      stuMod:studentModule
    }
})
