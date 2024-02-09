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
  }
};

// 1) first ssitutation --> writing single array literal 
const arr = [8, 7, 9];
console.log(arr)
const badArr = [1, 2, arr[0], arr[1], arr[2]] // manually adding values to array
console.log(badArr)

const arr2 = [1, 2, arr] // this doesnt add the elements individually but rather adds the whole array
console.log(arr2)

// spread operators --> es6 FEATURE
const newArr = [1, 2, ...arr] // spread opearator takes out all the elements form the array and rights it individually to the newArr -- >ES6 
console.log(newArr)

//spread operator when we want elements of array individually 
console.log(newArr) // gives array
console.log(...newArr) //gives array element


const newMenu = [...restaurant.mainMenu, 'Roti']
console.log(newMenu)

//2) spread operator is a bit similar to destructing -- difference is spread opearator takes all the elements from array and doesnt create new variable and therefor can only be used where we have values separated by commas


// 3)use cases  -- 1)shallow copy and 2) merge two arrays 

//cpy array
const mainMenuCopy = [...restaurant.mainMenu]

//join array 
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(menu)

// 4) spread operators works on all so called iterables 
// iterables --> array , string , maps or sets --> but not object 

//using spread operator with string
const stringName = "Jonas";
const letters = [...stringName, "", 'S.']
console.log(letters)

//5) NOTE - we use this only when buliding array or passing argument to function - example below
// console.log(`${...stringName} Williams`) this will give error 

// 7) spread operator to pass argument into function
// const ingrediants = [
//   prompt("Let's make pasta! ingrediant1?"),
//   prompt("ingrediant2 ?"),
//   prompt("ingrediant3 ?")
// ];
// console.log(ingrediants)

// restaurant.orderPasta(ingrediants[0],ingrediants[1], ingrediants[2]) --> this is the old way to pass arguments 
//restaurant.orderPasta(...ingrediants) // this separates the ingrediants array and uses the value accordingly

//NOTE ===> ES18 update ---> we can use spread operator on objects also even though it is not iterable
//example

const newRestaurant = {
  foundingYear: 2020,
  ...restaurant,
  foundingMember: "Suhnak"
}
console.log(newRestaurant)

//shallow copy of objects similar to whta we did for array
const restaurantCopy = { ...restaurant }
restaurantCopy.name = "Detour";
console.log(restaurantCopy.name)
console.log(restaurant.name)