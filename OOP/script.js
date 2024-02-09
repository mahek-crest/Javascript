'use strict';

//an arrow function will not as an function constructor as it doesnt have its own this keyword

//only diff between regular and constructoer function is the new keyword
//we use new keyword for the constructor function
//there were 4 steps behind the scene now 
// 1) new (empty object-->{}) is created
// 2) functoin is called , this = {}
//3) linked to prototype
//4) function is automatically returns {} 

const Person = function (firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear

    //never create a property inside a connstructor function --> as we might vreate more person from this function ..which means it will carry out this that many times which is results in poor performance 
    this.calAge = function () {
        console.log(2020 - this.birthYear)
    }
}

const jonas = new Person('jonas', 2001)
const matilda = new Person('matilda', 2002)

console.log(jonas)
console.log(matilda)
console.log(jonas instanceof Person)