console.log(10==10);
console.log(10=='10')
console.log(10==='10');

// for(let i =0 ; i<10000;i++){
//     console.log('',i);
// }

var obj={color:'white', name:'nandini',price:10};

console.log(obj);

for(let i in obj){
    console.log(obj[i]);
}

console.table(obj);

var a = ['a','v','x'];
var num = [1,2,3];


var next = a.concat(num);
console.table(next)

for(x in a){
    console.log(x);
}

for(y of a){
    console.log(y);
}
