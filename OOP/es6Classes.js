'use strict';
//classes in js do not work like traditional classes
//es6 classes are better representation of the function constructors we used earlier
//this happens with a different syntax
//goal was better syntax and people comming from different languages
//these are special kind of functions

//class expression

//class declaration
class Person {
    //first we add the constructor this works similar to constructor function but here it is a method for the class
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    //creating method
    //this will be in the prototype of the objects not on the prototype on the object 
    //method will be automatically be added to .prototype property we dont ha eto mess with it as we did in the constructor fucntions 
    calcAge() {
        console.log(2020 - this.birthYear)
    }

    greet = function () {
        console.log(`hello ${this.firstName}`)
    }

}
//new object creation is also the same as we created with the new keyword
//whenever we create new instance this the constuctor will automatically be called

const jonas = new Person('jonas', 2001)
console.log(jonas)

//we can also build methods as we did in the constructor functions 
// Person.prototype.greet = function () {
//     console.log(`hello ${this.firstName}`)
// } --. works the same if we add it in main class
jonas.greet()
// this proves that class really just hides the true nature of prototypal inheritance in javascript

//IMP --Classes

//1) classes are not hoisted unlike function declarations
//2) classes are also first class citizens just like functions (can pass them and return them from function)
//3) classes are always executed in the strict mode --> even if one doesnt specify 
