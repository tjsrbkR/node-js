let ary = []; 
let total = 0; 
for(let i=0; i<5; i++){
    ary.push(i);
    total = total + ary[i];
}
console.log( `total : ${total}`);
console.log(ary);