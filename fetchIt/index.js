const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

console.log('hi')

const cities=[];

async function makeCities(){
    const blob =await fetch(endpoint);
    const data =await blob.json();
    return data;
}

makeCities()
    .then(data=>cities.push(...data))
    .catch(err=>alert(err));

// console.log(typeof cities);
// console.log(cities.map(place=>place.city));


//will work id we call the event listener directly on it 
function places(cities){
    console.log(cities.map(place=>place.city));
    return cities.map(place=>place.city);
}

// function display(){
//     console.log(places(cities));
// }



//use the event listeners for the final values from the arr otherwise teh fetch will be executed towareds the end


//use event listeners for fetch
document.querySelector('#btn').addEventListener('click',()=>{
    places(cities);
});




