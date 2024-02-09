'use strict'

const Person = function (firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
}

Person.prototype.calcAge = function () {
    console.log(2020 - this.birthYear)
}

const Student = function (firstName, birthYear, course) {
    //this is duplicate code from person constructor function which also inheritane is not shown ..if something is changed in person it will not be reflected to  student
    // this.firstName = firstName
    // this.birthYear = birthYear//so we call the person function 
    // Person(firstName, birthYear) --> this doesnt work as we are actually calling the construstor function as regular function call and alsohere this keyword is set to undefined 
    // we use the call method which will be able to spcify the keyword 
    Person.call(this, firstName, birthYear)
    this.course = course
}

Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} enrolled in ${this.course}`)
}

const mike = new Student('mike', 2005, 'It')
console.log(mike)
mike.introduce()