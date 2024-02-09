'use strict';

// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.
// we return a boolean value to filter out that 

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


const deposit = movements.filter(function (mov) {
    return mov > 0;
})
console.log(movements)
console.log(deposit)

const withdrawals = movements.filter((mov) => mov < 0)
console.log(movements)
console.log(withdrawals)