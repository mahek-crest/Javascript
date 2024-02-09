'use strict'

//new way to create object--> using function called object.create()

//works in a diffferent way --no prototype property is involved , no constructor functions,no new operator
// and can set prototype toany object

// we create a object that acts as prototype --> this has all the properties person will have

const PersonProto = {
    calcAge() {
        console.log(2045 - this.birthYear)
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

//now we create the object here --> with the above object as the prototype
const steven = Object.create(PersonProto)
// now this returns a brand new empty object that is linked to the prototype that we passed
console.log(steven)

//adding proeprties 
steven.name = "steven smith"
steven.birthYear = 2002

steven.calcAge()

//creating method in the prototype object do we dont have to explicitly set properties 
const jessica = Object.create(PersonProto)
jessica.init('jessi', 2020)
jessica.calcAge()