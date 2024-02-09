'use strict';

//   Prototypes

//each and every function in javascript has property called prototype
//same is true for constructure functions 
//object created by constructor function will get access to all the methos and properties that is defined on constructor prototype property

const Person = function (firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
}

//objects created by constrtuctor functions 
const jonas = new Person('jonas', 2001)
const matilda = new Person('matilda', 2002)

//all the objects will get access to properties defined on this prototype property
console.log(Person.prototype) //--> this will show the calcage property inside it also 

//hence we add a method to the Person's prototype property 
//instead of creating calage inside the function constructure we can use the prototype property 
Person.prototype.calcAge = function () {
    console.log(2020 - this.birthYear)
}
//this keyword in each of them is set to the object thta is calling the method

// jonas object created by the constructor function will have access to the calcage property as it is in the Person's prototype--> we can use it even thought it is not on function itslf 
//this is efficient as only one copy is created and 
//now we can resuse this function on the objects that we have created 
jonas.calcAge()
matilda.calcAge()


//Conclusion -- > any object always has access to the moethods and properties fromits prototype


// prototype of jonas and matilda is Person.prototype we can confim this by the following special property
//__proto__ --> not he prototype property but prototype 
console.log(jonas.__proto__)
console.log(jonas.__proto__ === Person.prototype) // gives true

// person.protype should be prototype of person but NO
// instead it is gonna be used as the prototype of all the objects that are created with the person constructor

// can be confirmed second time as 
console.log(Person.prototype.isPrototypeOf(jonas))//true 
console.log(Person.prototype.isPrototypeOf(Person))//false ---> henced proved

//due to bad naming prototype can be seen as prototypeofLinkedObjects

// we can also set properties on prototypr not just methods
Person.prototype.species = 'homo sapiens'
console.log(jonas.species)

console.log(jonas.hasOwnProperty('firstName')) //this gives true 
console.log(jonas.hasOwnProperty('species')) //this gives false as we have nopt defined this property in the constructor function but in prototype hence it has the access



// person.prototype is also an object and we know every object in javascriptn has its own prototype
// it is called object.prototype which is built by object constructor function
//this object constructor function is called bts when a new object literal is created
//ie ---->  {..} ===new object(..)

//entire series of link between object is called the prottype chain
// Object.prototype is usually at the top of chain which means its prototypes is null i.e its __proto__ property points to null 