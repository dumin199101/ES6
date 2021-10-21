<template>
    <input type="text" v-model="keyword">
    <h3>{{keyword}}</h3>
</template>

<script>
    import {customRef} from 'vue'

    export default {
        name: "CustomRef",
        setup(){
            
            function myRef(val,delay) {
                let timer
                return customRef((track,trigger)=>{
                    return {
                        get(){
                            console.log(val)
                            track()
                            return val
                        },
                        set(newval){
                            clearTimeout(timer)
                            timer = setTimeout(()=>{
                                console.log(newval)
                                val = newval
                                trigger()
                            },delay)
                        }
                    }
                })
            }
            
            let keyword = myRef('Hello',500)
            
            return {
                keyword
            }
            
        }
    }
</script>