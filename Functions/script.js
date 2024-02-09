'use strict';


// ----------function is just an object in javascript------

const bookings = []

const createBooking = function (flightNum, numPassenger = 1, price = 199 * numPassenger) {

    //setting default parameters old way --ES5
    // numPassenger = numPassenger || 1
    // price = price || 200

    // ES6 way is setting default value in the arguments 

    const booking = {
        flightNum,
        numPassenger,
        price
    };
    console.log(booking)
    bookings.push(booking)
}
createBooking("ABC", 5)
createBooking("ABC", 2)
createBooking("ABC", 2, 400)
//here in the above case parameters are given in specific order , if it changes there wont be accurate results
// skipping the parameter doesnt work in this case only way to do this is by setting undefined
// example in the below case we skip the passengers and set price to 1000 but here it will treat 1000 as passengers and calulate price acoordingly 
createBooking("abc", 1000)
// to solve this we use undefined -- > which is equal to not settingvalue at all
createBooking("abc", undefined, 1000)
