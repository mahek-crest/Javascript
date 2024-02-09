// Importing module
import { add, totalPrice as price, totalQuantity } from './shoppingCart.js'

//the above can also be written as -- if we wan to export everything which is exported module


console.log('importing module ');
//this will not work first as when we want to connect a module to html file --> we need to specify the type attribute in html file

addToCart('bread', 5)
console.log(price, totalQuantity)

//default export
add('bread', 5)