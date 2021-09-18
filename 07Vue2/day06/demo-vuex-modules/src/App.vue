<template>
    <div id="app">
        <!--<Student></Student>-->
        <Student2></Student2>

    </div>
</template>

<script>

    import Student from './components/Student.vue'
    import Student2 from './components/Student2.vue'

    export default {
        name: 'App',
        components: {
            Student,
            Student2
        }
    }
</script>

<style lang="less">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
