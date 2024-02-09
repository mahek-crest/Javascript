'use strict';

const arr = [1, 2, 3, 4, 5]
console.log(arr[0])
console.log(arr.at(0)) // similar to what we did in the above example to acces the array element but using different method

// the at method may look similar to basic accessing but it as unique featue of it own like it works similar to slice 

//there are three ways to access the last element of an array 
console.log(arr[arr.length - 1])
console.log(arr.slice(-1)[0])
console.log(arr.at(-1))

//  which to use ? --> depends on the usecasee
// at is useful when we want to access it from the last or method chaining (later section)
// the at method also works on strings

const str = 'javascript'
console.log(str.at(2))
console.log(str.at(-1))