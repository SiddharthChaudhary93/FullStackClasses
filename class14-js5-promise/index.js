// function pass(){
//     return (
//         new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 var a = 2;
//                 if(a ==2){
//                     resolve('It resolved');
//                 } 
//                 else{
//                     reject('it didnt');
//             }},3000)
//         })
//     )
// }


// pass().then((message)=>{
//     console.log('message' + message);
// }).catch((msg)=>{
//     console.log('msg' + msg);
// })



//fetch api in form a link
// const data = fetch('https://api.github.com/users');
                    
// console.log(data);



//to use the api
const arr=[];
const data2 = fetch('https://api.github.com/users')
                    .then((resp) => {
                        return resp.json();
                    })
                    .then((data)=>{
                        
                        arr.push(...data);
                    });

console.log(arr.filter(n => n.login));

// data.then((blob)=>blob.text())
//      .then((data)=>console.log(data));
// can be put into an async function and use await 






//use async promise to get the data to be simplified
const allData=[];
async function data11(){
    const data= await fetch('https://api.github.com/users');
    const data2 = await data.json();
    allData.push(...data2);
    return data2;
}
// console.log(data11().then(blob => blob.text()).then(data=> 



// console.log(data11().then(data => console.log(data)));

console.log('arris all arr', allData);
//gives you the response if the blob is printed
// console.log(arr);
