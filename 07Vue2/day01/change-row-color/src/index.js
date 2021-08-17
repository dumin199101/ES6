// 使用ES6语法导入JQuery
import $ from 'jquery'

// 导入样式
import './css/index.css'

// 导入less
import './css/index.less'

//导入图片
import logo from './images/logo.png'
$("#logo").attr('src',logo)

$(function () {
    $("li:odd").css("background", "red");
    $("li:even").css("background", "green");
})

//装饰器
function info(target){
    target.info = 'Person info';
}

@info
class Person{}

console.log(Person.info)
