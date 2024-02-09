'use strict';

// Data needed for a later exercise

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  }

};

const arr = [1, 3, 3]
const a = arr[0]
const b = arr[1]

console.log(a, b)

const [x, y, z] = arr;  //destructuring assignment -- >this doesnt affect the original arr
console.log(x, y, z)

let [first, , second] = restaurant.categories;
console.log(first, second)

// [first, second] = [second, first] -- > destructor top swap values

// console.log(restaurant.order(2, 0)) 
const [starter, mainCourse] = restaurant.order(2, 0) // desrtructuring the above statement
console.log(starter, mainCourse)

//With nested arrray
const nestedArr = [1, 2, [3, 4]]
const [i, , j] = nestedArr // destructuring normal array
console.log(i, j)

const [p, , [q, r]] = nestedArr
console.log(p, q, r)

// default values --> useful in the case we dont know size of array
//const [m, n, o] = [8, 9] ----->// here it will give undefined value for o as we dont the num of elements in array[8,9] hence we set default values in the above as shown

const [m = 1, n = 1, o = 1, d = 1] = [8, 9]
console.log(m, n, o, d)  // here we get value as 1 for the elements which are not in the array --> result will be  --> [8 9 1 1]