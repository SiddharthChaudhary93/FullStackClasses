// inheritance all the propertiesd that are present in the 

class Chef{
    constructor(name,lname='peter'){
        this.name=name;
        this.lname=lname;
    }
    cookOne(){
        console.log('chicken',this.name,this.lname);
    }
    cookTwo(){
        console.log('rice',this.name,this.lname);
    }
}

class SousChef extends Chef{
    constructor(name,lname,age){
        super(name,lname);
        //super sends all the variables up to the main class
        this.age=age;
    }
    
    cookThree(){
        console.log('tikka',this.name);
        console.log(this.age);
    }
}

var c2 = new Chef('albert','rober');
c2.cookOne();
c2.cookTwo();
// console.log(c2.name);
// console.log(c2.lname);


var c1 = new SousChef('main','name',23);
c1.cookOne();
c1.cookThree();
// console.log(c1.name);
// console.log(c1.lname);


//using fuinction we cannot make a method
function Car(name){
    this.brand = name;
    const j =function () {
        console.log('name',this.brand);
        return this.brand;
    }
}
//wont work
car1 = new Car('audi');
console.log(car1.j);
