'use strict';

// a function returning a function

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`)
    }
}
console.log(greet('hey'))
const helloGreet = greet('hey')
helloGreet('jonas')

greet('hey')('jonas')

//here we have created a fucntion greet which returns another fucntion
// here while declaring  console.log(greet('hey')) we get the functiopn as result which means we have already passed the argument hey with it
// then we explicitly define hellogreet to and pass jonas in the name argument which then completely gives us the result as hey jonas

// implcit way to to call this function is greet('hey')('jonans') --> but here we have to carefully pass the argument in same order

//challenge -->write above using arrow
// const greetArr = greeting => firstName => console.log(`${greeting} ${firstName}`)

// greetArr('hi')('jonas')

// example- self

function shape() {
    return function () {
        console.log('hello world')
    }
}

const x = shape();
console.log(x)
x()
//or 

shape()()

// ------------------example 2-------------
function interviewQues(job) {
    switch (job) {
        case 'teacher':
            return function (name) {
                console.log(`what do you taech ${name}?`)
            }
        case 'designer':
            return function (name) {
                console.log(`what do you draw ${name}?`)
            }
        case 'lawyer':
            return function (name) {
                console.log(`${name} how l;ong have you been practicing?`)
            }
        default:
            console.log("default")
    }
}

const jobTeacher = interviewQues('teacher');
jobTeacher('mane');

//OR 

interviewQues('designer')('mark')