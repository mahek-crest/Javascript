'use strict';
// ------------SPLIT &JOIN--------------

// using the split function to separate string based on some condition

console.log('a+very+nice+evening'.split('+')) // this separtes the element when it encounters with a + 
// the result is given in form of array

console.log("jonas smith".split(" "))

// as this returns an array we can easily use destruturing here -->using the above example
const [firstName, lastName] = "jonas smith".split(" ")
console.log(firstName)
console.log(lastName)

// we can also use template literal to to make bigger strings with the above results 

// join method does the opposite of split --> it joins multiple strings based on the spcecified criteria 
const newName = [`Mr.`, firstName, lastName.toUpperCase()].join(' ')
console.log(newName) //here strings are joined according by addig " " (space) as we have specified.

const capitalizeName = function (nameArr) {
    const splitName = nameArr.split(' ')
    const namesUpper = [];

    for (const name of splitName) {
        // namesUpper.push(name[0].toUpperCase() + name.slice(1)) --> method 1

        namesUpper.push(name.replace(name[0], name[0].toUpperCase()))
    }

    console.log(namesUpper.join(' '))
}

capitalizeName('mr. janas smith willims')
capitalizeName('mr. janas smith archies willims')
capitalizeName('jessica ann smith davis willims')


//---------------PADDING--------------
// means adding number of characters in the string until it has desired characters which we have specified 
//that is is the given string is of 5 literals and we have specified it for 25 --> paddingwill add 20 specid=fied characters
//adding to the starting of the string

const message = " Please move to gate 2!"
const message2 = "jonas"
console.log(message.padStart(25, ('+')))
console.log(message2.padStart(25, ('+')))
console.log(message2.padStart(25, (' ')))

//padend is use to add characters at end of the string

console.log(message2.padStart(10, ('+')).padEnd(15, ('+')))

//two ways to convert number into string
// const num;
// 1) --> string(num)
// 2) --> num + '' --> adding number to string converts it into string


// credit card number
const maskedCreditCard = function (number) {
    const str = String(number);
    const last = str.slice(-4);
    return last.padStart(str.length, ('*'))

}

console.log(maskedCreditCard(123456789))
console.log(maskedCreditCard("123456789"))
console.log(maskedCreditCard(987654321))


// -----------------repeat method-------------
// to repeat one string multiple times as specified

const message3 = "Danger......."
console.log(message3.repeat(5))