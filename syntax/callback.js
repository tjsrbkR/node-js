// function a(){
//     console.log("a");
// }
// let a = function (){
//     console.log("a");
// }
// a(); 
let a = function (){
    console.log("a");
}
function slowfunc (callback){
   callback();
}

slowfunc(a);