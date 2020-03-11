const express = require('express');
//外置路由
const router = express.Router();
router.get("/",(request,response)=>{
    response.end("Hello Node!");
});
//导出
module.exports = router;