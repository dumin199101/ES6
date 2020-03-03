const fs = require('fs');
fs.writeFile('./1.txt','hello node!',function (err) {
    if(!err){
        console.log('Complete');
    }
});