import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        getCount(state){
            return `当前计数值为【${state.count}】`
        }
    },
    mutations: {
        add(state) {
            state.count++;
        },
        sub(state, step) {
            console.log(step)
            state.count -= step
        }
    },
    actions: {
        addAsync(store) {
            setTimeout(function () {
                store.commit("add")
            }, 1000)
        },
        subAsync(store, step) {
            setTimeout(function () {
                store.commit("sub", step)
            }, 1000)
        }
    },
    modules: {}
})
