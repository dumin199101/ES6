// 2s 之后返回双倍的值
function doubleAfter2seconds(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2 * num)
        }, 2000);
    })
}

function consoleLog(message){
    return new Promise(()=>{
        setTimeout(() => {
            console.log("Async Exec "+message)
        }, 5000);

    });
}

async function testResult () {
    //此步骤异步执行，耗时5s
    consoleLog("Hello World");
    //此步骤异步执行，耗时2s
    await doubleAfter2seconds(30).then((data)=>{
        console.log(data)
    })

    //直接获取结果，如果没有await，返回的是Promise对象
    let result = await doubleAfter2seconds(20);
    console.log(result)

}

//总的执行流程5s
testResult();
