'use strict';

// map method is quite similar to foreach method but the difference is that it returns new array

//it maps all the elemt into new array --> its another method to loop over arrays 

//map() does not execute the function for empty elements.

// syntax -----> array.map(function(currentValue, index, arr), thisValue)

// const arr = [1, 2, 3, 4, 5]

// arr.forEach(function (value, index) {
//     // const newValue = 
//     console.log(value + 5)
// })
// console.log(arr)

const eurToUsd = 1.1

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// using maps method --> we use a function to to solve proble of creating a new array
const movementsUsd = movements.map(function (item) {
    return item * eurToUsd
})
console.log(movementsUsd)

//--writng the same using for of loop --> simply loop over one array

// const movementsUSD2 = []
// for (const mov of movements) {
//     movementsUSD2.push(mov * eurToUsd)
// }
// console.log(movementsUSD2)

// usig the same map function and writing it in arrow function
// const movementsUsdArr = movements.map(mov => mov * eurToUsd)
// console.log(movementsUsdArr)

//using all 3 parameters 
const movDes = movements.map((mov, i, arr) => {
    if (mov > 0) {
        return `Movement ${i + 1} you deposited ${mov} amount`
    } else {
        return `Movement ${i + 1} you withdrawed ${Math.abs(mov)} amount`
    }
})
console.log(movDes)

// using the arrow function

const movDes2 = movements.map(
    (mov, i, arr) =>
        `Movemnt ${i + 1} you ${mov > 0 ? 'deposited' : 'withdrawed '} ${Math.abs(mov)}`
)
console.log(movDes2)

