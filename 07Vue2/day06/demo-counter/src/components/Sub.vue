<template>
    <div>
        <h3>当前计数器的值：{{count}}</h3>
        <h4>{{getCount}}</h4>
        <button @click="sub(5)">减5</button>
        <button @click="subAsync(5)">异步减5</button>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {mapMutations} from 'vuex'
    import {mapActions} from 'vuex'
    import {mapGetters} from 'vuex'

    export default {
        computed: {
            ...mapState(["count"]),
            ...mapGetters(["getCount"])
        },
        methods: {
            ... mapMutations(["sub"]),
            ...mapActions(["subAsync"])
        }
    }
</script>