var j=0;
j++;
j++;
console.log(j);
document.write(j);
var fan={name:'sallu'};
var obj = {color:'red',
speed:100,
wings:3,
size:{sm:'30',
    lg:40,
    md:35},
func: function(){
    console.log('abc');
    console.log(fan.name);
    return this.speed + this.wings;
}
}
console.table(obj);
console.log(j.__proto__);

console.log(obj.size.sm);
console.log(obj['size']['sm']);
console.log(obj.func());

var arr=[0,2,4];
console.log(arr[-1])