const grandParent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');


grandParent.addEventListener('mouseover',e=>{
    console.log(e.target);
});
// parent.addEventListener('mouseover',e=>{
//     console.log(e);
// });
// child.addEventListener('mouseover',e=>{
//     console.log(e);
// });