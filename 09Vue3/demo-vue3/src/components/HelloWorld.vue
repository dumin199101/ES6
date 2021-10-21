<template>
    <h3>{{msg}}</h3>
    <h3>{{school}}</h3>
    <button @click="sayHi">点击触发</button>
    <slot name="article"></slot>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: ["msg", "school"],
        // 声明自定义事件
        emits: ['say'],
        setup(props, context) {
            console.log(props)
            console.log(context.attrs.job)

            function sayHi() {
                context.emit("say", "Hello World")
            }

            console.log(context.slots)
            return {
                sayHi
            }
        }
    }
</script>

