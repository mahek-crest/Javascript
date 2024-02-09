'use strict';

class Person {

    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2020 - this.birthYear)
    }

    greet = function () {
        console.log(`hello ${this.firstName}`)
    }

    get age() {
        console.log(2045 - this.birthYear)
    }
    set fullName(name) { //one parameter is mandatory
        if (name.includes(' ')) {
            console.log(name)
        } else {
            console.log('enter fullname ')
        }
    }
}

const jonas = new Person('jonas smith', 2002)
jonas.age
