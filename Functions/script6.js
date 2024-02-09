'use strict';

// es6 - let and const declaration
// when we declare variable using this we have block scope present

// before es6 when we had to create private variable we had to declare a functuion and call it explicity as shown below
function greet() {
    var a = 2;
    var b = 'hello'
}
//greet() // wont be seen until we declare the variable 


//---------Immediately Invoked Function Expression--- 
(function () {
    var a = 2;
    var b = 'hello'
    console.log('iife function executed ')
})() // we use this extra parenthesis at the end to immediatly invoke the function
// as the function doesnt have a name we can not call it as many times as we want

// this is dev used to create fucntion expression prior to es6