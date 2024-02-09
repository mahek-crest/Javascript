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

// optional chaining
// this is useful mainly when dealingwith nested objects 
// if the property specified before the optional chaining operator only then it moves to its right to check

console.log(restaurant.openingHours.fri?.open) // gives 11 as it exists
console.log(restaurant.openingHours.mon?.open) //shows undefined as monday doesnt exit 
// here in the monday example as mon property doesnt exit we wont get any error also


const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat']

for (const day of weekdays) {
    // console.log(day);
    const open = restaurant.openingHours[day]?.open ?? 'closed'; // using nullish as using || will give undefined at saturday as opening hour for that is 0 which is a falsy value 
    console.log(`on ${day} we open at ${open}`)
}


console.log(restaurant.categories?.[2] ?? 'method doesn\'t exist'); // will show vegetrain

console.log(restaurant.hour?.[2] ?? 'method doesn\'t exist'); // will show method doesnt exist 


// optional chaing can also be used in arrya 
//to check if value on the left exist 

const users = [{
    name: 'jonas',
    email: "mahek@gmail.com"
}]
console.log(users[0]?.name) ?? "user array empy "
// this above thing can be manually written as
// if (users.length > 0) {
//     console.log(users[0].name)
// } else {
//     console.log('user array empty')
// }