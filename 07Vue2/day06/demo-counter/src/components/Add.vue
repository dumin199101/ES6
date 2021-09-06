<template>
    <div>
        <h3>当前计数器的值：{{$store.state.count}}</h3>
        <h4>{{$store.getters.getCount}}</h4>
        <button @click="addOne">加1</button>
        <button @click="addAsyncOne">异步加1</button>
    </div>
</template>

<script>
    export default {
        methods: {
            addOne() {
                this.$store.commit("add")
            },
            addAsyncOne() {
                this.$store.dispatch("addAsync")
            }
        }
    }

</script>