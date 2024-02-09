//exporting module

console.log('exporting module ')

const shoppingCart = 10;
const cart = []

export const addToCart = function (product, quantity) {
    cart.push(product, quantity)
    console.log(`${quantity} ${product} added to cart`)
}

// IMPORTANT -- exports nee to happen in the top level code only -- otherwiseit wont workexample is
// if (!conditon) {
//     export const addToCart = function (product, quantity) {
//         cart.push(product, quantity)
//         console.log(`${quantity} ${product} added to cart`)
//     }
// } --> this wont work as it it is top level code

const totalPrice = 1408
const totalQuantity = 15

export { totalPrice, totalQuantity }


// using the default export

//here we have not defined any name hence we can name is as we want in the import module
//here module will look for the imports and as the add is not there it will use the default export which we have specified

// export default function (product, quantity) {
//     cart.push(product, quantity)
//     console.log(`${quantity} ${product} added to cart`)
// }

//the import here is not copy of what we exported but a connection we made to that particular element we choose to use ---> they point to the same thing