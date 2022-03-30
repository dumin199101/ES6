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
