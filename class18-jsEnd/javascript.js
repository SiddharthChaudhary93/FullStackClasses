console.log('hi')
console.log(window.screen);
console.log(window.location);
console.log(window.navigator.geolocation.getCurrentPosition(display))

function display(position){
   console.log("Latitude: " + position.coords.latitude +
   "Longitude: " + position.coords.longitude); 
}