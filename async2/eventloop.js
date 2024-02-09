'use strict'

console.log('Test start')

setTimeout(() => console.log('o sec late'), 0)
Promise.resolve('resolve p1')
    .then(res => console.log(res))

console.log('test end')

// result is

// Test start
//  test end
// resolve p1
// o sec late

//first 2 outputs --> this is because any top level code will run first . top level --> code outside any callback

//between timer and resolved promise -- both finishes at the same time
//here the  promise will be pu on the microstack queue and microtask queue has priority over the callback queue