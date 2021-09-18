import axios from 'axios'
import {SET_STUDENT, DELETE_STUDENT} from "./mutation-types"

export default {
    namespaced:true,
    state: {
        students: []
    },
    getters: {
        students(state) {
            state.students.map(item => {
                return item.total = item.salary * item.num
            })
            return state.students
        },
        totalSalary(state) {
            return state.students.reduce((sum, item) => {
                return sum += item.salary * item.num
            }, 0)
        }
    },
    mutations: {
        [SET_STUDENT](state, data) {
            state.students = data
        },
        [DELETE_STUDENT](state, id) {
            state.students.splice(state.students.findIndex(item => item.id == id), 1)
        }
    },
    actions: {
        async getStudent(context) {
            const {data} = await axios.get('./studentList.json')
            context.commit('SET_STUDENT', data)
        }
    }
}