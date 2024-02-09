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
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`here is your pasta made up of ${ing1}, ${ing2} and ${ing3}`)
    },
    // 5) one parameter is required others are optional
    orderPizza: function (mainIngrdiants, ...otherIngrdiant) {
        console.log(`here is the pizza made with ${mainIngrdiants} `)
    }
};

// 1) REST OPERATOR
// similar to spread operator but it does the exact opposite
// uses the exact same syntax but collects multiple elemts and condense them into an array

//spread operator as on the right side of = operator , 
const arr1 = [3, 4]
const arr = [1, 2, ...arr1]

//rest operator -- as on the left side 
const [a, b, ...others] = [1, 2, 3, 4, 5] //rest operator collects the element in destructuring assignment and in this case store it into new array called others
console.log(a, b, others)

// 2) example to show that dots can be used on both side
const [pizza, pasta, ...otherFood] = [...restaurant.mainMenu, restaurant.starterMenu]
console.log(pizza, pasta, otherFood)
// rest syntax collects all the array after last variable that is why rest operator should alwayas be the last --> therefore there can only be one rest in the destructing assignment

//3) objects and rest operators
//creating object using the rest operator in opening hours
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays)

// 4) functions and rest operator
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    console.log(sum);
}
add(2, 4)
add(4, 6, 2, 1)

const x = [23, 34]
add(...x)

// 5) 
restaurant.orderPizza('mushroom', 'cheese', 'chilly')
restaurant.orderPizza('mushroom') // we get empty array in otherFood option