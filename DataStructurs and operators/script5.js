'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    }

};

// SHORT CIRCUITING (&& AND ||)

// ----------ONLY FOR OR OPERATOR-----------
console.log('---------------OR Operator-------------------')

//three things it can use  
// use any data type, return any datatype, and short circuit evaluation

// for OR operator - short circuiting means that if first value is truthy value it will return that immediately
// that if first is truthy other will not be even evaluated
console.log(3 || 'jonas') // -->result of or operator doesnt always have to be boolean
console.log(' ' || 'jonas')
console.log('true' || 0)
console.log(undefined || null) // both are falsy values undefined will be considered falsy and then moved to the second value which is also falsy hence no short circuiting and we will get null as a result

console.log(null || undefined || 0 || 'hello' || 23)// returns hello as that is the first truthy value we have encountered

// if the first operand is true js doesnt have to look to the next as it eventually be true for the rest --- so it short circuits

// below example is considering that we dont know if numGuest exist or not
restaurant.numGuest = 23
const guest = restaurant.numGuest ? restaurant.numGuest : 10; //before setting the property it will give 10 as a result
console.log(guest)

//after
const guest2 = restaurant.numGuest || 10;
console.log(guest2);

// ----------ONLY FOR AND OPERATOR-----------

console.log('---------------AND Operator-------------------')
// when it comes to short circuit evaluating AND oprator does the exact opposit of or

console.log(0 && 'jonas') // here we get 0 as and operator short circuits as soon as it encounter with a falsy value without even looking at the next value

//expresion it is evaluted until falsy but if all are truthy  it returns the last value
console.log('jonas' && 23)