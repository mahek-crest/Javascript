'use strict';

/**
 * function logger() {
    console.log("this is a function ")
}
logger();

function car(wheel, car) {
    console.log(wheel, car);
    console.log(`this ${car} has ${wheel} wheels`)
}
car(3, "samssung");


// -------function declaration -----
function birthYear(year) {
    console.log(2050 - year)
}
birthYear(2020)
// -------function expression -----
const birthDate = function (date) {
    console.log(50 - date)
}
birthDate(22)

// ---Arrow FUnctions--


// const birthYear = 2005
const calAge = birthYear => 2030 - birthYear
const age = calAge(2010)
console.log(age)


const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2030 - birthYear;
    const years = 65 - age;

    console.log(`${firstName} has ${years} until retirement`)

}

yearUntilRetirement(2002, "mahek")
*/

function addTwoWheel(currentWheel) {
    return currentWheel + 2;
}

function car(wheel, car) {
    console.log(wheel, car);
    console.log(`this ${car} has ${wheel} wheels`)

    const newCar = addTwoWheel(wheel);
    console.log(`Now this ${car} has ${newCar} wheels`)
}
car(3, "samssung");