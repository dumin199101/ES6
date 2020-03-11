const express = require('express');
const app = express();
app.get("/",(request,response)=>{
    response.send('Hello World;')
});
app.listen(8888,function () {
    console.log("请访问127.0.0.1:8888");
})