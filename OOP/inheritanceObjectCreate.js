'use strict';

const PersonProto = {
    calcAge() {
        console.log(2045 - this.birthYear)
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonProto)

const StudentProto = Object.create(PersonProto) // we created a new prototype
StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear)
    this.course = course
}

const Jay = Object.create(StudentProto)//this object has prototype of student 
Jay.init('jay', 2005, 'cse')