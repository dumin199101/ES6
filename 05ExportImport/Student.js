const student = {
    name:"lisi",
    age:22,
    eat:(food)=>{
        console.log("eat "+food)
    }
}

const teaching = function(student){
    console.log("teach "+student.name)
}

const teacher = {
    name:"zhangsan",
    age:40,
    teaching
}

//两种方式导出

exports.teacher = teacher
module.exports.student = student



