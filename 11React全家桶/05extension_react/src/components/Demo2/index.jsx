import React from 'react'
import ReactDOM from 'react-dom/client'

export default function Demo2() {

    const [count, setCount] = React.useState(0);

    const myRef = React.useRef()

    function add() {
        setCount(count => count + 1)
    }

    function show(){
        console.log(myRef.current.value)
    }

    function unmount(){
        const root = ReactDOM.createRoot(document.getElementById('demo2'));
        root.unmount()
    }

    React.useEffect(()=>{
       let timer = setInterval(()=>{
           setCount(count=>count+1)
       },1000)
       console.log("@") //count每发生变化一次，执行一次
       return ()=>{
           clearInterval(timer)
       }
    },[count])



    return (
        <div id="demo2">
            <input type="text" ref={myRef}/>
            <h1>count的值是：{count}</h1>
            <button onClick={add}>点击加1</button>
            <button onClick={show}>点我提示数据</button>
            <button onClick={unmount}>卸载组件</button>
        </div>
    )
}