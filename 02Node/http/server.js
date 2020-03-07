// 创建一个http服务器
var http = require("http");
var server = http.createServer();
server.listen(8080,function () {
    console.log("127.0.0.1:8080");
});

server.on('request',function (res,rep) {
    console.log(res.method);
    rep.write("OK!");
    rep.end();
});