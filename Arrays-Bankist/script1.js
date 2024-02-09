'use strict';

let arr = ['a', 'b', 'c', 'd', 'e']

console.log(arr.slice(2)) // doesnt mutate the original  but returns a new array

console.log(arr.slice(2, 4))
console.log(arr.slice(-1))
console.log(arr.slice(1, -1))

// creating a shallow copy with slice method 
console.log(arr.slice())

// with spread operator 
console.log(...arr)

// --------splice array ----------
//fundamental difference is that it mutates the arr

console.log(arr.splice(1, 2)) // this means we want to delete 2 elements from position 1
console.log(arr) // remaining arr that is the result -->['a', 'd', 'e'] this is because we used splice method

//-------REVERSE---------
arr = ['a', 'b', 'c', 'd', 'e']
const arr2 = ['e', 'g', 'h', 'i', 'j']

console.log(arr2.reverse()) //this also mutates the array
console.log(arr2)

// -----concate-------

const letters = arr.concat(arr2);
console.log(letters)

// this can also be done using spread operator
console.log([...arr, ...arr2])


//------join ----------
console.log(letters.join('-'))