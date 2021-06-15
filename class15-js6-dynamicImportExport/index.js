import add from './add.js'

const btn = document.querySelector('.btn');



function clickMe(){
    alert(add(4,5));
}


btn.addEventListener('click',clickMe)