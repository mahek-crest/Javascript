'use strict';


// 286750000000 is way hard to read but 286,750,000,000 seems simpler

// we use nuemric separaotr in this case
// its makes it easy for us to read and javascript will ignore it 
const dia = 286_750_000_000
console.log(dia) // gives result as 286750000000

// helps us give meaning to certain part 
console.log(15_00)
console.log(1_500)

//but this can only be used in certain situations
// /exaple

const PI = 3.1415
console.log(3.14_15)
//console.log(3._1415) // this will give us syntax error

// Numeric separator cannot be used near decimal , beginning and end of a number
// also cannot be used in string
//example
console.log(Number('230_000')) //gives Nan 