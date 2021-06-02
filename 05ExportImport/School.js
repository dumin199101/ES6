//导入
const studentInfo = require("./Student")
//实例化
const teacher = studentInfo.teacher
const student = studentInfo.student
//调用
teacher.teaching(student)
student.eat("馒头")

