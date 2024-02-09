'use strict'

// try {
//     alert('hey')
// } catch (err) {
//     alert(err)
// }

const addTwo = function () {
    let a = 10
    try {
        console.log(`adding 2 to A : ${a + 2}`)
    } catch (err) {
        console.log(err)
    }
}
addTwo()

console.log('------------------------------')

try {
    console.log(`try block`)
    throw new Error('error in try block')
} catch (err) {
    console.log('in the catch block')
    // console.log(err)
}



console.log('------------------------------')

const example = async function () {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/eesti`)

        const data = await response.json()

        console.log(data1)
    }
    catch (err) {
        alert(err)
    }
}

example()