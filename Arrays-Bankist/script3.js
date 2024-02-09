'use strict';

//---------for Each method ---------

// we had seen for of but this is funcdametally different

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// we want to print msg for movement --> positive value is deposit and negative is withdrawal 

for (const movement of movements) {
    if (movement > 0) {
        console.log(`you deposited ${movement} amount`)
    } else {
        console.log(`you withdrawed ${movement} amount`)
    }
}
console.log('------------------------------------')
// The forEach() method calls a function for each element in an array.

// The forEach() method is not executed for empty element. it is higher order function

// --------------syntax is here ---------------
// array.forEach(function(currentValue, index, arr), thisValue)

movements.forEach(function (movement) {
    if (movement > 0) {
        console.log(`you deposited ${movement} amount`)
    } else {
        console.log(`you withdrawed ${movement} amount`)
    }
}) // we get the same result twice

//this is how it works
// 0:function(200)
// 1: fucntion (450 )....so on

// we use callback function to tell higher order function what should we do
console.log('------------------------------------')

// when we need access to the counter variable here
for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${i + 1} you deposited ${movement} amount`)
    } else {
        console.log(`Movement ${i + 1} you withdrawed ${Math.abs(movement)} amount`)
    }
}

console.log('------------------------------------')

// now doing the same in forEach method
// array.forEach(function(currentValue, index, arr), thisValue) --. now this is useful
movements.forEach(function (movement, i, arr) {
    if (movement > 0) {
        console.log(`Movement ${i + 1} you deposited ${movement} amount`)
    } else {
        console.log(`Movement ${i + 1} you withdrawed ${Math.abs(movement)} amount`)
    }
})

// other fundamental differece is that we cannot break out of for each loop (continue and break do not work)