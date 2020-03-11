const express = require('express');
const app = express();
//导入外置路由
var router = require("./route");
//引用外置路由
app.use(router);
app.listen(7777,function () {
    console.log("请访问127.0.0.1：7777");
})