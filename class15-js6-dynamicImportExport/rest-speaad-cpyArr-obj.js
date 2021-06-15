function add(a,b,...args){
    console.log('args',args);
    //will store from index 2 onwards
    console.log(arguments);
    //will store all of them
    console.log(typeof arguments);
    //has a type object
    console.log(...arguments);
    var [a,b] = [...args];
    var [c,d] = [...arguments];
    return 'added in args '+ (a+b) +' first two for arguments '+ (c+d);
}

var obj1={'a':1,'z':2,'b':'22'};
var obj2={...obj1};
console.log(`${JSON.stringify(obj1)}`,obj2);
var a = ['a',"b",'c',10];

var b = [1,2,3];
var c = [...b];
//shift remove from front
//unshift add to front
var d = [...a,...b];
//or a.concat(b);
console.log('d',d);
c[1]=10;
console.log('c',c);
console.log('b',b);
console.log(add(10,2,3,4,5,6,7,8));




const arr=[1,2,3,20,5]
console.log(Math.max(...arr));
