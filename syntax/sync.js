let fs = require('fs');

//readFileSync
/*
console.log("a");
let result = fs.readFileSync('syntax/sample.txt','utf-8');
console.log(result);
console.log("c");
*/


console.log("a");
let result = fs.readFile('syntax/sample.txt','utf-8',function (err, result){
    console.log(result);
});
console.log("c");