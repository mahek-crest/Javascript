'use strict'

// //promise is an object representing eventual completion or failure of an asynchrounous operation

// //wrong approach
// const promiseOne = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('asyn task')
//     }, 3000)
//     resolve() //**
// })

// promiseOne.then(function () {
//     console.log('promise consumed')
// })

// //correct approach
// const promiseTwo = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('asyn task 2')
//         resolve()//**
//     }, 3000)

// })

// promises have 3 states ---> 1) pending , 2) settled(when it is resolved or rejected)

// promiseTwo.then(function () {
//     console.log('promise consumed 2')
// })
// // in the correct approach, we wait for the asynchronous task to finish before fulfilling the promise, just like your friend waits to get the coffee before giving it to you.This ensures that promises in JavaScript accurately represent the completion of asynchronous operations.


// //declaring promise without variable
// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('asyn task 3')
//         resolve()
//     }, 6000)
// }).then(() => {
//     console.log('asyn task 3 completed')
// })

// //usingdata
// //this also shows that you can access data from the main promise can be accessed in the then function of it too
// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve({ userName: "jonas", age: 34 }) // this helps us pass the information to then
//     }, 3000)
// })
// promiseThree.then(function (userName) {
//     console.log(userName)
// })


//
// const PromiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true;
//         if (!error) {
//             resolve({ userName: "jonas", password: 123 })
//         } else {
//             reject('something went wrong error')
//         }
//     }, 5000)
// })

// //how we can use rhis instead of callback hell
// PromiseFour.then((user) => {
//     console.log(user)
//     return user.userName //where does this actually go (the return value ) this is not stored in varialbe as we get an error
// }).then((userName) => {
//     console.log(userName)
// }).catch((error) => {
//     console.log(error)
// }).finally(() => {
//     console.log('promise is either resolved or completed  ')
// })


//using await instead of then and catch

//async and await are keywords introduced in ECMAScript 2017 (ES8) to simplify working with Promises.
const promiseXhr = new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'data1.txt', true)
    xhr.send()

    xhr.onload = function () {
        if (xhr.status === 200) {
            resolve(xhr.responseText)
        } else {
            reject(xhr.statusText)
        }
    }

})

promiseXhr.then(function (data) {
    console.log(data)
}).catch(function (error) {
    console.log(error)
})