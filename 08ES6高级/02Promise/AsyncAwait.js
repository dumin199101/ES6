import fs from 'then-fs'

console.log("AAAAA")

async function read(){

    console.log("BBBBB")

    const result1 = await fs.readFile("txt/1.txt","utf8")
    console.log(result1)

    const result2 = await fs.readFile("txt/2.txt","utf8")
    console.log(result2)

    const result3 = await fs.readFile("txt/3.txt","utf8")
    console.log(result3)

    console.log("DDDDD")
}

read()

console.log("CCCCC")