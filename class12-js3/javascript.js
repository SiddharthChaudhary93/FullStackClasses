import {add,mul,n} from './add.js';
import sub,{z,a} from './sub.js';
// make sure to give the full file name with the extension


console.log(add(2,3));
console.log(mul(2,3));
console.log(sub(1,2));

console.log(n);
console.log(a);
console.log(z);


window.add =add;
//instance of the module is created so to avoid the anem collision use window.function name 


//default and named exports


// var a = function(a){
// return a;
// };

// console.log(a('haha'))

// const b = () => {
//     return 'lalala';
// }

// console.log(b());

// const btn = document.querySelector('#btn');
// btn.addEventListener('click',()=>add(2,3));

// btn.addEventListener('click',()=>{
//     console.log('i am the click')
// })

// function alertMe(){
//     console.log('i am the click alert');
// }
// btn.addEventListener('click',alertMe);

// const alertBox = () => {
//     alert('works');
// }
// btn.addEventListener('click',alertBox);