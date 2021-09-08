import fs from 'then-fs'

const arr = [
    fs.readFile("txt/1.txt","utf8"),
    fs.readFile("txt/2.txt","utf8"),
    fs.readFile("txt/3.txt","utf8"),
]

Promise.all(arr).then(result=>{
    console.log(result)
})