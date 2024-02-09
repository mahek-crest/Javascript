'use strict';

console.log(Math.sqrt(25))
console.log(25 ** (1/2)) //exponentiation
console.log(8 ** (1 / 3))

//--------max --------
console.log(Math.max(5, 65, 23, 6, 1))

//the max function does coercion internally if we pass a string inside 
console.log(Math.max(5, '65', 23, 6, 1))

//but is not possible to parse 
console.log(Math.max(5, '65px', 23, 6, 1)) //this gives NaN

//--------min --------
console.log(Math.min(5, 65, 23, 6, 1))

//---------constants-------
console.log(Math.PI)

// can be used as for example area of circle
console.log(Math.PI * Number.parseFloat('10px') ** 2)

//--------random num generation -------
//this gives value between 0 to 1 and then we multiply by the number we want the number to be 
console.log(Math.random() * 6)

//----rounding integer -----
console.log(Math.trunc(23.3))

console.log(Math.round(23.3))
console.log(Math.round(23.9))

console.log(Math.ceil(23.3))
console.log(Math.ceil(23.3))

console.log(Math.floor(23.3))
console.log(Math.floor(23.9))

//they also do type coersion
console.log(Math.floor('23.3'))


//floor and trunc might work the similar way for posotive numbers but not the same when it comes to negative number 
console.log(Math.floor(-23.3))
console.log(Math.trunc(-23.3))

//---------rounding decimals---------
//here function returns result in form of string--we have to convert it 
console.log((2.7).toFixed(0))
console.log((2.7).toFixed(3))
console.log((2.345.toFixed(2)))
console.log(+(2.345.toFixed(2))) //this will give number type result