'use strict'

// ----------timer functions----------

// setTimeout
// executes a call back function or evaluates an expression after a specified number of milliseconds

// console.log("console argument1")
// setTimeout(function () {
//     console.log("console argument2")
// }, 3000)
// //this function doesnt block the execution of next line of code and hence arg3 will be logged
// console.log("console argument3")

// //using arrow function
// setTimeout(() => console.log('arg 4 '), 2000)

// passing argument in settimeout function
//here first 2 arguments are mandatory(function and time) then rst other are optional --example bleow
// setTimeout(function (job, location) {
//     console.log(`your job application for ${job} is submitted at ${location}`)
// }, 1000, 'SE', 'Noida')

//passing it using array
let arr = ['SE', 'Noida']
// setTimeout(function (job, location) {
//     console.log(`your job application for ${job} is submitted at ${location}`)
// }, 1000, arr[0], arr[1])

// //using spread op
// setTimeout(function (job, location) {
//     console.log(`your job application for ${job} is submitted at ${location}`)
// }, 1000, ...arr)

// if we stor this settimeout in variable it will give the id of the settimeout function which can further be used to clear the timer 
// const timer = setTimeout(function (job, location) {
//     console.log(`your job application for ${job} is submitted at ${location}`)
// }, 1000, ...arr)
// console.log(timer)
// // to clear the timer 
// clearTimeout(timer)


//-----------------------------------------------------

// setInterval
// executes a callback function again and again after a specified time interval

const timer2 = setInterval(function () {
    console.log('hi')
}, 2000)
console.log(timer2)
// clearInterval(timer2)

//below function executes the setinterval only till 5 seconds ...this helps us create 
const timer = setTimeout(function () {
    console.log('hello')
    clearInterval(timer2)
}, 5000)
