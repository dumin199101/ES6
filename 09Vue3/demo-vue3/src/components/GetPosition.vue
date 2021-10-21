<template>
    <h3>当前鼠标的坐标</h3>
    <h4>横坐标：{{pageX}}</h4>
    <h4>纵坐标：{{pageY}}</h4>
</template>

<script>
    import useMousePositon from '../hooks/useMousePosition'
    export default {
        name: "GetPosition",
        setup(){
            let {pageX,pageY} = useMousePositon()
            return {
                pageX,
                pageY
            }
        }
    }
</script>