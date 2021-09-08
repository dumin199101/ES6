import fs from 'then-fs'

//此操作为异步操作，保证顺序

fs.readFile("txt/1.txt","utf8").then(data=>{
    console.log(data)
    return fs.readFile("txt/2.txt","utf8")
}).then(data=>{
    console.log(data)
    return fs.readFile("txt/3.txt","utf8")
}).then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)
})