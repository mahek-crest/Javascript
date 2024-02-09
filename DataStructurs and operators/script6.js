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

// nullish coalesing operator - ES2020 feature

// he more common use case is to set default values for JSON objects as follows. 

const foo = {
    bar: 0
}

const valueBar = foo.bar ?? 42;
const valueBaz = foo.baz ?? 42;

// Value of bar: 0  
console.log("Value of bar: ", valueBar);

// Value of bar: 42  
console.log("Value of baz: ", valueBaz);



//-----------Logical assignment operators - ES2021-----------
const rest1 = {
    nameRes: 'res1',
    numGuest: 20
}

const rest2 = {
    nameRes: 'res2',
    owner: "kok"
}

// adding properties that apply to all which dont have them --> by setting some default vlaues
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10; // below is the new way to write it in form of logical assignment values

rest1.numGuest ||= 10;
rest2.numGuest ||= 10;


console.log(rest1)
console.log(rest2)