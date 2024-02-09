'use strict'

//we only need 2 things here that is extend keyword and super method as shown below to create a child class and implement inheritance

//behind the scenes everything is ame as we saw in the constructor function 

class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    calcAge() {
        console.log(2020 - this.birthYear)
    }

    greet = function () {
        console.log(`hello ${this.firstName}`)
    }

    static hey() {
        console.log('hey there')
    }

}

class Student extends Person {
    //this may also work without this constructor --> unless there are new method 
    constructor(fullName, birthYear, course) {
        //always need to happen first!
        super(fullName, birthYear) // responsible for creating this keyword 
        this.course = course;
    }

    introduce() {
        console.log(`my name is ${this.firstName} and I am studying ${this.course}`)
    }

    //overriding the above calcage method 
    calcAge() {
        console.log(`I'm ${2020 - this.birthYear} years old, but as a studen i feel like ${2030 - this.birthYear + 10}`)
    }
}

const jessica = new Student('jessi', 2002, 'math')
jessica.calcAge()//here this will override the method in parent class as form the delegation it will aqpproach this first


//GENERAL NOTE  ---> all this inheritance can sometime s be very probalamatic in real world
//this will more discussed when we do functional programming --> which is kind of an alternative to object oriented 