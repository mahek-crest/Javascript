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

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
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
    },

    //7) sometime we have function with lot of parameter it can be hard to know the order of parameters ...instead of manually finding it we can pass an objecyt into function as argument

    // also assigning default values --> we use equals sign as we have destructed the object and now assign the values
    orderDelivery: function ({
        time = '22:30',
        starterIndex = 1,
        mainIndex = 1 }) {
        console.log(
            `Order receive! ... ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${time}`
        )
    }

};

// 7) using onject as argument --continue
restaurant.orderDelivery({
    time: '22:23',
    mainIndex: 2,
    starterIndex: 1
})

//this is after assigning default values
restaurant.orderDelivery({
    time: '22:23',
    // mainIndex,-- > you dont declere it if yopu want to use the default value 
    starterIndex: 1
})


// 1) destructuring an object --> similar to aarays (diff is we have to declare the variable and user curly braces)
const { categories, name, openingHours } = restaurant;
console.log(categories, name, openingHours)

// 2) when we want to change the variable name for properties--> simply by referencing it as below
const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant
console.log(restaurantName, tags, hours)

// 3) destructuring the menu
// here we are calling an unexisting property called menu ,setting the default value as empty array and also calling startermenu by a new variable name and setting the value to empty array --> empty aary is useful when we dont have any property specified

// 4) default values
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter)

// all these examples are useful as we have hard coded date , but in real life we may get data from different resources and hence might not know how the data looks like so setting default value is very useful

// 5)Mutating variable
let a = 2;
let b = 5;
const obj = { a: 23, b: 7, c: 14 };
// {a,b}= obj; --> ythis line will show error as whwn we start a line with curly brace javascript expects a code block and we cannot assign anything to code block hence we wrap it 
({ a, b } = obj);
console.log(a, b)

// 6) nested objects
const { fri } = openingHours;

const { fri: { open: o, close: c } } = openingHours // further destructuring with assigning value

console.log(o, c)
