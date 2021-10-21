import {
    onBeforeUnmount,
    onMounted,
    ref
} from "vue";

export default function(){

    let pageX = ref(0)
    let pageY = ref(0)

    function getPosition(){
        pageX.value = window.event.pageX
        pageY.value = window.event.pageY
    }

    onMounted(()=>{
        window.addEventListener('click',getPosition)
    })

    onBeforeUnmount(()=>{
        window.removeEventListener('click',getPosition)
    })

    return {
        pageX,
        pageY
    }
}

