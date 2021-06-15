const para = document.querySelector('#name');
const btn = document.querySelector('#btn');

function changeText(){
    para.textContent = 'New Text';
}

btn.addEventListener('click',changeText);