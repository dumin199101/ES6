/**
 * Promise是一个构造函数
 *  - 我们可以创建Promise的实例 const p = new Promise()
 *  - Promise实例对象代表一个异步操作
 * Promise.prototype上包含.then,.catch,.finally方法
 * .then 方法用来预先指定成功与失败的回调函数
 *   - p.then(成功的回调函数，失败的回调函数)
 * .all([Promise1,Promise2]) 方法会发起并行的Promise异步操作，等所有的异步操作全部结束后才会执行下一步的.then操作，等待机制
 * .race([Promise1,Promise2]) 方法只要任何一个异步操作完成，就立即执行下一步的.then操作，赛跑机制
 *
 * async与await是ES8引入用来简化Promise异步操作
 *  - 包含await的方法必须声明为async
 *  - await方法后边必须是一个Promise实例
 *  - await方法可以直接拿到Promise的执行结果
 *
 * 使用const接收变量的原因: 防止意外修改
 */

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
