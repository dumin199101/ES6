<template>
    姓：<input v-model="firstname"><br>
    名：<input v-model="lastname"><br>
    全名：{{fullname}}
    <hr>
    值{{sum}}<br>
    <button @click="sum+=1">值加1</button>
    <br>
    值{{msg}}<br>
    <button @click="msg+='!'">信息更改</button>
    <br>
    职工姓名：{{name}}<br>
    <button @click="name+='*'">改变姓名</button>
    <br>
    工资：{{job.salary}}<br>
    <button @click="job.salary+=10000">涨薪</button>
</template>

<script>
    import {ref, computed, watch, reactive, watchEffect,toRefs} from 'vue'
    // 测试监视器跟计算属性
    export default {
        setup() {

            //计算属性
            let firstname = ref('张')
            let lastname = ref('三')
            let fullname = computed(() => {
                return firstname.value + "-" + lastname.value
            })

            //监视ref定义的响应数据
            let sum = ref(0)
            /*watch(sum, (newV, oldV) => {
                console.log("sum的值改变了")
                console.log(newV, oldV)
            }, {immediate: true})*/

            //监视多个ref定义的响应数据
            let msg = ref('Hello')

            watch([sum, msg], (newV, oldV) => {
                console.log("sum的值改变了,msg的值改变了")
                console.log(newV, oldV)
            })

            let person = reactive({
                name: 'zhangsan',
                age: 28,
                job: {
                    jobname: 'UI设计师',
                    salary: 50000
                }
            })


            // 监视reactive定义的数据，无法获得oldValue的值，自动开启deep选项，深度监视
            /*watch(person,(newV,oldV)=>{
                console.log("person的值变了")
                console.log(newV,oldV)
            })*/

            // 监视reactive定义的数据的某一个属性
            /*watch(() => person.name, (newV, oldV) => {
                console.log("person的name属性发生改变", newV, oldV)
            })*/

            // 监视reactive定义的数据的多个属性
            watch([() => person.name,()=>person.job.salary], (newV, oldV) => {
                console.log("person的name属性跟job属性发生改变", newV, oldV)
            })


            // 立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数。
            watchEffect(()=>{
                let x1 = sum.value
                let x2 = msg.value
                console.log("触发监听...")
            })


            return {
                firstname,
                lastname,
                fullname,
                sum,
                msg,
                person,
                // 利用toRefs可以将一个响应式 reactive 对象的所有原始属性转换为响应式的ref属性
                ... toRefs(person)
            }
        },
        beforeCreate(){
            console.log("beforeCreate")
        },
        created(){
            console.log("created")
        },
        beforeMount(){
          console.log("beforeMount")
        },
        mounted(){
            console.log("mounted")
        },
        beforeUpdate(){
            console.log("beforeUpdate")
        },
        updated(){
            console.log("updated")
        },
        beforeUnmount(){
            console.log("beforeUnmount")
        },
        unMounted(){
            console.log("unMounted")
        }
    }


</script>