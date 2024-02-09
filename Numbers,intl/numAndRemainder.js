'use strict';

console.log(23 === 23.0)

//base 10 -- 0to9
//binary base 2-- 0,1

console.log(0.1 + 0.2)
//javascript doesnt have a better way to re[present] this number --> this is due to infinite fraction
//this can also be seen in other languages
console.log(0.1 + 0.2 === 0.3) // gives false

//above is simply an error in javascript we have to accept

//some cases javascript does some rounding behind the scenes

//------conversion---------
console.log(Number('23'))
console.log(+'23') //these both give 23 and makes the code look much cleaner

// ----------Parsing-------------
console.log(Number.parseInt('30px')) // javascript will automatically try ti find the number --> like an advanced type coersion
//this tries to get rid of unneccesary things --> useful in case when we want to remove css units
// in order to make this work the string has to start with numbers

//parseInt has second argument  that is regex --> which takes the base of the num we are using
console.log(Number.parseInt('30px', 10))


console.log(Number.parseInt('e23'))

console.log(Number.parseFloat('2.5rem'))
console.log(Number.parseInt('2.5rem')) //only get the integer part 
console.log(Number.parseInt('   2.5rem   ')) // here the sapce wont affect the operation

//parse methods are global function we dont have to always call it with number method --> but it is a traditional way to use it 
console.log(parseInt('34rem')) //works the same way --> modern js


//checking if value if NaN
console.log(Number.isNaN(20))
console.log(Number.isNaN('20'))
console.log(Number.isNaN(+'20X')) //this is not a number

//checking if value is real number not an string
console.log(Number.isFinite(20))
console.log(Number.isFinite('20'))
console.log(Number.isFinite(+'20X')) //false as thois will not be an number


// -------------Remainder Operator-----------
// gives the remainder of division
console.log(5%2) // 5= 2*2 + 1
console.log(5/2)