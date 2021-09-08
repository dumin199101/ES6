import fs from 'fs'

function getFile(path) {
    return new Promise(function(resolve,reject){
        fs.readFile(path,"utf8",function (err,data) {
            err ? reject(err) : resolve(data)
        })
    })
}

getFile("txt/1.txt").then(function (data) {
    console.log(data)
}).catch(function(err){
    console.log(err.message)
})

getFile("txt/2.txt").then(function (data) {
    console.log(data)
}).catch(function(err){
    console.log(err.message)
})

getFile("txt/3.txt").then(function (data) {
    console.log(data)
}).catch(function(err){
    console.log(err.message)
})