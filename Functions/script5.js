'use strict';

// ---------BIND METHOD----------

// previously we used call and apply method to point to function inside other object
// bind method also does the similar thing

// DIFFERENCE BETWEEN CALL/APPLY and BIND
//bind method does not execute the function immediately . instead creates copy of that method which can be called later in the program

// if we try to set variable to call/apply method we get undefined

const jonas = {
    name: "Jonas",
    birthYear: 2002,

    // Function method to calculate age
    calculateAge(currentYear) {
        const age = currentYear - this.birthYear;
        return age
    }
};

const mark = {
    name: "mark",
    birthYear: 2001
}

//using the call method directly 
console.log(jonas.calculateAge.call(mark, 2003))

//this bind method does not execute it immediately instead it will return copy of the function

let newAge05 = jonas.calculateAge.bind(mark, 2005)
//why dont we use this immediately ?
// main advantage we get here is that we are presetting value and when we call the function like below we dont have to declare it here

console.log(newAge05())

// presetting of value is useful when we wan to set one spcifivally for 2005 other for 2006 or other year we can declare different variable for the same 
let newAge06 = jonas.calculateAge.bind(mark, 2006)
console.log(newAge06())