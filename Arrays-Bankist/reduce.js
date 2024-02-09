// -------------Reduce --------------

// The reduce() method executes a reducer function for array element.

// The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

// The reduce() method does not change the original array.

// instead of current value of an array we have an accumalator first in one of the 3 parameters --> snowball resemblance as it gets bigger and bigger 

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce(function (acc, inAc, arr) {
    return acc + inAc
}, 0); // AS WE WANt TO start countiing from 0
console.log(balance)

// we can also do other stuff
// maximum value 