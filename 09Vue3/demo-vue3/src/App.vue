<template>
    <h3>{{name}}</h3>
    <h3>{{age}}</h3>
    <h4>{{hobbys}}</h4>
    <h3>{{person.name}}</h3>
    <button @click="showInfo">打印信息</button>
    <button @click="changeInfo">更改信息</button>
    <HelloWorld msg="Good Good Study" school="北京大学" job="程序员" @say="sayInfo">
        <template #article>
            <h5>白日依山尽，黄河入海流</h5>
            <h5>欲穷千里目，更上一层楼</h5>
        </template>
    </HelloWorld>
    <Demo></Demo>
    <hr>
    <GetPosition></GetPosition>
    <hr>
    <div class="parent">
        <h3>祖先组件中汽车信息</h3>
        <h4>汽车品牌：{{car.name}}</h4>
        <h4>汽车价格：{{car.price}}</h4>
        <Son></Son>
    </div>
    <hr>
    <CustomRef></CustomRef>


</template>

<script>

    import {ref, reactive, provide} from 'vue'
    import HelloWorld from './components/HelloWorld.vue'
    import Demo from './components/Demo.vue'
    import GetPosition from './components/GetPosition.vue'
    import Son from './components/Son.vue'
    import CustomRef from './components/CustomRef.vue'

    export default {
        name: 'App',
        components: {HelloWorld,Demo,GetPosition,Son,CustomRef},
        beforeCreate() {
            console.log("beforeCreate事件执行")
        },
        setup() {
            console.log("setup函数执行了")
            //基本数据类型，响应式：RefImpl: get/set --- value
            let name = ref("lisi")
            let age = ref(22)

            //引用数据类型，响应式: RefImpl: get/set --- value:Proxy
            let student = ref({
                addr: '北京',
                school: '汇文中学'
            })

            //引用数据类型，响应式
            let person = reactive({
                name: 'sunzhongshan',
                age: 60,
                job: '大总统'
            })

            let hobbys = reactive(['游泳', '足球', '篮球'])


            function showInfo() {
                console.log(name)
                console.log(student)
                console.log(person)
                console.log(name.value + "," + age.value + "," + student.value.addr + "," + student.value.school)
                console.log(person.name, person.age, person.job)
            }

            function changeInfo() {
                name.value = 'zhangsan'
                age.value = 25
                // 数组数据可以直接修改了
                hobbys[1] = '排球'
                person.name = '袁世凯'
                console.log(name.value + "," + age.value)
            }

            function sayInfo(val){
                console.log("自定义事件触发，打印：",val)
            }

            let car = reactive({
                "name": "奔驰",
                "price": 500000
            })

            provide("car",car)

            return {
                name,
                age,
                showInfo,
                changeInfo,
                student,
                person,
                hobbys,
                sayInfo,
                car
            }
        }
    }
</script>

<style lang="css" scoped="">
    .parent{
        background: #6dbfff;
    }
</style>
