'use script';

const flight = "LH123";
const jonas = {
    name: "jonas smith",
    passport: "123456789"
}

const checkIn = function (flightNum, passenger) {
    flightNum = "ABC";
    passenger.name = 'Mr. ' + passenger.name//this is exactly same as manipulating jonas object

    if (passenger.passport === '123456789') {
        console.log("checkin")
    } else {
        console.log('wrong passport')
    }
}

checkIn(flight, jonas)
console.log(flight)
console.log(jonas)

const createnewPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000);
}

createnewPassport(jonas)
checkIn(flight, jonas)
console.log(jonas)

// javascript doesnt have pass by reference ---> it has pass by value only
// though it looks pass by reference                                                                              