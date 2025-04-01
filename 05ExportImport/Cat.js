/**
 * package.json 【npm项目管理】
 * 创建方式: npm init -y
 * 值为'module'则当作es模块处理；【浏览器环境】
 * 值为'commonjs'则被当作commonJs模块处理，如果没有定义则默认commonJs规范处理【Node环境】
 * export default 可以任意指定变量接收，但只允许有一次
 * import可以通过as关键字指定别名
 */
const cat = {
    name:"xiaohua",
    age:2,
    say:()=>{
        console.log("喵喵")
    }
}

const dog = {
    name:"xiaobai",
    age:4,
    say:()=>{
        console.log("汪汪")
    }
}

//单个导出
export const lion = {
    name: '狮子',
    age: 5,
    say(){
        console.log("呕吼！")
    }
}

// 批量导出
export {cat}
export default dog
