'use strict';


/*
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its
    capital city is ${capitalCity}.`
}

const couFinland = describeCountry('Finland', 6, 'Helsinki')
const couIndia = describeCountry('India', 14, 'dELHI')
const couMaldives = describeCountry('Maldives', 6, 'xyz')

console.log(couFinland);
console.log(couIndia);
console.log(couMaldives);

const worldPopulation = 7900
function percentageOfWorld1(populaiton) {
    return (populaiton * 7900) / 100
}

const forIndia = percentageOfWorld1(70)
const forFinland = percentageOfWorld1(10)
const forBhutan = percentageOfWorld1(1)

console.log(forIndia, forFinland, forBhutan)


const percentageOfWorld2 = function (populaiton) {
    console.log((populaiton * 7900) / 100)
}
percentageOfWorld2(70)


const percentageOfWorld2 = (population) => (population * 7900) / 100
// percentageOfWorld2(70)

function describePopulation(country, population) {

    const pop = percentageOfWorld2(population);

    console.log(`${country} has ${population} million people,
    which is about ${pop} of the world`)
}

describePopulation("china", 70)

const jonas = {
    firstName: "Jonas",
    lastName: "Smith",
    age: 12,
    hobby: "sleep",
    eyes: 2,
    bestFriend: "Michael",


    calBirthYear: function (age) {
        console.log(2030 - age)
    }


    // now using the this keyword
    calBirthYear: function () {
        const birthYear = 2050 - this.age
        return birthYear
    }

    // there might be times where we have to call the function repeatedly what we can do is that
}

// dot notation
console.log(jonas.firstName);

// bracket notation
console.log(jonas["firstName"]);

// example of expression in bracket notation
const nameKey = "Name";
console.log(jonas["first" + nameKey])
console.log(jonas["last" + nameKey])

const intrestedJonas = prompt("Choose one about jonas [firstname,lastname,age,hooby]");
// console.log(jonas.intrestedJonas);

if (jonas[intrestedJonas]) {
    console.log(jonas[intrestedJonas])
} else {
    console.log("wrong request")
}

jonas.location = "italy";

jonas.friends = ["Alex", "Smith", "Michael"]

const friend = `${jonas.firstName} has 3 friends and his bestfriend is ${jonas.friends[2]}`
console.log(friend)
jonas.hasDrivingLicense = true;

// calling the function(ethod) from abject
jonas.calBirthYear(jonas.age)

// usingthe bracket notation
// jonas["calBirthYear"](jonas.age);

// --------Loops---------

for (let i = 1; i <= 10; i++) {
    console.log(`rep`)
}

const jonas = ["hello", "john", 4, 6, true, "apple", "oranges"]
const types = []

for (let i = 0; i <= jonas.length - 1; i++) {
    console.log(jonas[i], typeof jonas[i])

    // filling types array
    types[i] = typeof jonas[i]
}

console.log(types)

const newJonas = [1, 2, 3, 4, 5]

const birthYear = [1991, 2002, 2015, 2007, 2004, 2001]
const age = []

for (let i = 0; i < birthYear.length - 1; i++) {
    age.push(2030 - birthYear[i])
}

console.log(age)


console.log("--------------------")
for (let i = newJonas.length - 1; i >= 0; i--) {
    console.log(newJonas[i])
}
// ---------loops in loop--------

// for (let exe = 1; exe <= 3; exe++) {
//     console.log(`-----Start exercise ${exe}`)

//     for (let rep = 1; rep <= 5; rep++) {
//         console.log(`---------Rep ${rep} of exerise ${exe}`)
//     }
// }
*/



/**
 *  this keyword [created for every execution context --> every funtion ]
    - takes the value of owner of the function in which the keyword is used
    - value is not static (depends on how fucntion is calles --> only assigned when function is actully called)

        - functions can be called in three ways
            1) method  ---> object that is calling the method
            2) simple function call --->undefined
            3) arrow function ---> here usng the this keyword will be simply to the neighbouring function(parent)
            4) event listener --->DOM element that the handler is attached to


// console.log(this)

function addTwo(num) {
    console.log(num + 2)
    console.log(this)
}
addTwo(23)

const addTwoArrow = (num) => {
    console.log(num + 2)
    console.log(this)// it gives window obj - this is beacuse arrow doesnt get its own this keyword hence uses lexical keyword that is window in this case
}
addTwoArrow(23)
 */

// const jonas = {
//     year: 2002,
//     calcAge: function () {
//         console.log(this)
//         console.log(2030 - this.year)
//     }
// }
// jonas.calcAge() //here jonas is the owner of the methd
// //this all is because jonas was calling the method not because we have decalred the method inside the object


// //using the this word is important because it calls the parent of --> JavaScript this keyword always holds the reference to a single object, which defines the current line of code’s execution context which means this keyword refers to the object that is currently executing the code.(gfg)


// const matilda = {
//     year: 2001,
// }

// matilda.calcAge = jonas.calcAge // called as method borrowing
// matilda.calcAge(); // here we get answer according to matildas year --> here this doesnt point to matildas year --> it points to the object calling method


// const f = jonas.calcAge;
// f();

