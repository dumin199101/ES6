import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //列表数据
        list: [],
        inputItem: '',
        id: 5,
        viewKey: 'all'
    },
    getters: {
        finishedCount(state) {
            return state.list.filter(item => item.done === false).length
        },
        itemList(state) {
            switch (state.viewKey) {
                case 'all':
                    return state.list
                    break
                case 'done':
                    return state.list.filter(item => item.done)
                    break
                case 'undone':
                    return state.list.filter(item => {
                        return item.done === false
                    })
                    break
                default:
                    return state.list
            }
        }
    },
    mutations: {
        setData(state, data) {
            state.list = data
        },
        setInputItem(state, value) {
            state.inputItem = value.trim()
        },
        addItem(state) {
            const item = {
                id: state.id,
                info: state.inputItem,
                done: false
            }
            state.list.push(item)
            state.id++
            //清空输入框的值
            state.inputItem = ''
        },
        deleteItem(state, id) {
            const index = state.list.findIndex((item) => {
                return item.id === id
            })

            //如果找到了,删除
            if (index !== -1) {
                state.list.splice(index, 1)
            }
        },
        changeStatus(state, id) {
            const index = state.list.findIndex(item => {
                return item.id === id
            })
            if (index !== -1) {
                state.list[index].done = !state.list[index].done
            }
        },
        clearAll(state) {
            state.list = state.list.filter(item => item.done === false)
        },
        changeList(state, key) {
            state.viewKey = key
        }
    },
    actions: {
        initList(store) {
            axios.get("./list.json").then(({data}) => {
                store.commit("setData", data)
            })
        }
    },
    modules: {}
})
