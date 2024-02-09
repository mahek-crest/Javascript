"use strict";

const airline = "TAP Air Portugal"
const plane = "A23R"

console.log(plane[0])
console.log(plane[1])
console.log(plane[2])

console.log('AH23'[2])

console.log(airline.length)
console.log("AS30".length)

//--string methods---
console.log(airline.indexOf('r')) //gives the first occurance
console.log(airline.lastIndexOf('r')) // gives position of the last occurance

console.log(airline.indexOf("Air")) // this is case sensitive and will give different answer for AIR or aiR etc

// slice does not modify the original array; it returns a new array.returns a shallow copy of a portion of an array.

console.log(airline.slice(4)) // this is a sub string and it does not change the undeerlying string  --> because it is impossible to mutate string


console.log(airline.slice(-2))

// to check the if the seat is middle seat or not 
const middleSeat = function (seat) {
    if (seat.slice(seat.length - 1) === 'K') {
        console.log('middle seat')
    } else {
        console.log('not middle seat')
    }
}

middleSeat('A23K')
middleSeat('23B')
middleSeat('A2R')