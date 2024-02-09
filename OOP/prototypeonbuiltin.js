'use strict';

const Person = function (firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
}
Person.prototype.calcAge = function () {
    console.log(2020 - this.birthYear)
}

const jonas = new Person('jonas', 2001)
const matilda = new Person('matilda', 2002)

Person.prototype.species = 'homo sapiens'
console.log(jonas.species)

//similar to prototype chain -- example
console.log(jonas.__proto__)
console.log(jonas.__proto__.__proto__)//points to object.prototype 
console.log(jonas.__proto__.__proto__.__proto__) // gives us null --> top of the chain


const arr = [1, 2, 3, 4, 5]
console.log(arr.__proto__)
//gives list of all the proprties
//each array doesnt contain all this methods but instead each array will inherit these methods from its prototype 


arr.push(3)
console.log(arr)

// arr.prototype.push(4)--> this will result in erro as push method is a property of the array itself, not its prototype
//prototype property that you can directly access and modify.