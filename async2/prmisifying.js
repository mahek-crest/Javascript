'use strict'

navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err)
)

console.log('getting position') // this happens first as the function offloaded in the background and then returned after its completion

// clearly callback based api

// as we are using call backs we can promisify a callback based api to a promise based api

// Promisifying in JavaScript refers to the process of converting a callback-based asynchronous operation into a Promise-based one. In JavaScript, asynchronous operations often involve callbacks, but Promises provide a more structured and readable way to work with asynchronous code.

const getPostion = function () {
    return new Promise(function (resolve, reject) {
        // navigator.geolocation.getCurrentPosition(
        //     position => resolve(position),
        //     err => console.log(err)
        // ) -- > can also be written as 
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}

getPostion().then(pos => console.log(pos))