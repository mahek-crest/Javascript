// -------first class and higherer order function--------------

// ----------first class----------
/**
 *  - these are like first-class citizens which means they Are SIMPLY VALUES
 *  - functions are just another type of object
 *
 * THEY CAN BE
 *  - Stored in variable
 *  - passed as an argument to another function
 *  - return function from function
 *  - call method of function --- bind
 */


// ----------higher order functions----------
/**
 * a functionthat reeives another function as argument that returns a new function or both
 *
 * only possible because of first class functions
 */

//------------------------------------------------------
const oneWord = function (str) {
    return str.replace(/ /g, "").toLowerCase();
}

const upperFirstword = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ')
}

const transformer = function (str, fn) {
    console.log(`original string : ${str}`)
    console.log(`trasnformed string : ${fn(str)}`)
    console.log(`transformed by : ${fn.name}`)

}

transformer('javascript is the ebest', oneWord)
console.log('-------------------------')
transformer('javascript is the ebest', upperFirstword)

// hence we are calling the transformer function and in that we are passing  function --> these function whic are passed are called callback
//that is because we dont call them ourselves but ask the higher order function to call them later

// another example is passing the function in addEvent listerner -- which we called as the event handler

const high = function () {
    console.log('hello')
}

document.body.addEventListener('click', high) // here high is the call back fucntion and addeventlistener is higher order

// this concept is all the time used in built in javascript functions  -- for each 

['a', 'b', 'c'].forEach(high);
['a', 'b', 'c'].forEach(high);

//advantages
// 1) helps to split up the code
// 2) allows us to create abstraction

// abstraction is done as we directly use the first class function without depending on the functionality ---creates level of absrtraction we could have directly specified the functionality in transformers function but we choosse to use the functions

const radius = [1, 2, 3];

// logic to clculate area
const area = function (radius) {
    return Math.PI * radius * radius;
}
// logic to calculate diameter
const diameter = function (radius) {
    return 2 * radius;
}

const calculate = function (radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]))
    }
    return output;
}