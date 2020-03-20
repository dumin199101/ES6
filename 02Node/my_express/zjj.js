const express  = require('express');
const app = express();

app.use(function (request,response,next) {
    console.log("333222");
    next(); //如果没有next，不会往下执行
});

app.get("/",function (request,response,next) {
    console.log("111111");
    response.end("Hello!");
    next();
});

app.use(function (request,response,next) {
    console.log("3333333")
});

app.listen(7777,function () {
    console.log("请访问127.0.0.1:7777")
});