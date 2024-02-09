'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

//3) declaring array and using it in openinghours object
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri',]
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [`weekdays${4}`]: {
        open: 0, // Open 24 hours
        close: 24,
    },
}
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // openingHours: openingHours, -- > we dont have to write this(1)
    //can easily be declred as shown below rather than the above example
    openingHours,

    // 2) no longer have to create a property and then set it to a function expression
    // orderPasta: function (ing1, ing2, ing3) {
    //     console.log(`here is your pasta made up of ${ing1}, ${ing2} and ${ing3}`)
    // },
    // above can be written as
    orderPasta(ing1, ing2, ing3) {
        console.log(`here is your pasta made up of ${ing1}, ${ing2} and ${ing3}`)
    },

};

// using enhanced object literals - es6
// introduced three ways to write object literals

//1) when we have object outside and want to use it in other object 

// 2) writing methods  

//3) we can compute property name instead of writeing them out manually 

console.log(restaurant.openingHours)