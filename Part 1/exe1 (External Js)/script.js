/**
 *
 * let country = "India";
let continent = "asia";
let population = 20;

console.log(country);
console.log(continent);


console.log(typeof country)
// console.log(typeof "string")
// console.log(typeof true)
// console.log(typeof null)

country = 23;
console.log(country);
console.log(typeof country)

let year;
console.log(year);
console.log(typeof year)
 */

/**
 *
 * const now = 2040
const ageJonas = now - 1994;
const ageAnsh = now - 1997;

console.log(ageJonas, ageAnsh);

console.log(ageJonas * 2);

const firstName = "John";
const lastName = "Smith"
const fullName = firstName + " " + lastName;
console.log(fullName)

console.log(ageAnsh < ageJonas)

const firstName = "John";
const birthYear = 2020;
const currentYear = 2040;
const job = " trainee"

const jonas = "I'm " + firstName + " a " + (currentYear - birthYear) + " old " + job;
console.log(jonas);

// --------- using template literal
const newJonas = `I'm ${firstName}, a ${currentYear - birthYear} old ${job}`;
console.log(newJonas)

const age = 15;
const fixedAge = 18;

if (age >= 18) {
    console.log("Yes one can drive")
} else {
    console.log(`Way to young drive.Try after ${fixedAge - age} years`)
}
// -----------type conversion--------------------
const year = "1978";

console.log(year + 18);
console.log(Number(year) + 18)

console.log(typeof year)

console.log(Number("mahek")) // here it gives o/p as NAN but actually it is cnsidered as invalid number

// ----------------------------Type coersion--------------------
// javascript automatically converts statement in few conditions  
console.log("23" / "23")

// -----------logical operators ----------------

const hasDrivingLisence = true
const hasGoodVision = false
const isTired = false;

console.log(hasDrivingLisence && hasGoodVision);//false 
console.log(hasDrivingLisence || hasGoodVision);//true 
console.log(!hasDrivingLisence);//false

if (hasDrivingLisence && hasGoodVision) {
    console.log("Can drive")
} else {
    console.log("cannot drive")
}

if (hasDrivingLisence && hasGoodVision && isTired) {
    console.log("Can drive")
} else {
    console.log("cannot drive")
}


// ----------switch statement---------------

const num = 896;

switch (num) {
    case 1:
        console.log("one")
        break;
    case 2:
        console.log("two")
        break;
    case 3:
        console.log("three")
        break;
    case 4:
    case 6:
        console.log("mix")
        break;
    case 5:
        console.log("five")
        break;
    default:
        console.log("not a num")
}*/

// ---------ternary operator-----------

const age = 23;
const drink = age >= 18 ? console.log("Yes") : console.log("no")
console.log(drink)