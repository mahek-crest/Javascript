'use strict';

//-------------Closure -----------
function add() {
    var x = 1;

    var f = function (y) {
        return x + y
    }
    return f(3)
}

console.log(add())
// here f will have access to parent function add as it lies in its lexical scope and add function is in global context

let f;

const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2)
    }
}

// g();
// f(); //here it is able to access the a variable although g has finished execution this is because it is inside the a variable the g function hence it is able to access the a variable 

const h = function () {
    const b = 7;
    f = function () {
        console.log(b * 2)
    }
}

g();
f();
console.dir(f)

// this is reassigning the f function
h();
f()
console.dir(f)
// console. dir() is the way to see all the properties of a specified JavaScript object in console by which the developer can easily get the properties of the object. 



// setTimeout(function () {
//     console.log(timer)
// }, 1000)


//example 2

const boardPassenger = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`we are now boarding all ${n} passengers`)
        console.log(`ther are 3 groups , each with ${perGroup} passengers`)
    }, wait * 1000) //we will pass argument in second but here we have to pass it in miliseconds so we multipled with 1000

    console.log(`will start boarding in ${wait} seconds`)
}

boardPassenger(180, 3);

// here the callback function was implemented completely independent of the board passenger functions still the call back function was able to uise the variable in the board passenger function enviroment --> this is a sign of closure being created

//challenge 2 --> closure functions
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red'

    document.body.addEventListener('click', function () {
        header.style.color = 'blue'
    })
})();