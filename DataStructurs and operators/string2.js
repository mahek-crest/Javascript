'use strict';

const passenger = "joNaS"
console.log(passenger)
const passengerLower = passenger.toLowerCase();
console.log(passengerLower)
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)
console.log(passengerCorrect)

// ----replacing method----
const price1 = '234.567 &'
const price2 = price1.replace('&', '$')
console.log(price2)

// we can also replace multiple items in one sentence
const announcement = "All are requeste to move to gate 3 for boarding"
console.log(announcement)

const newAnnouncement = announcement.replace('gate', 'door').replace('boarding', 'immigration')
console.log(newAnnouncement)

//booleans
// gives tru or false for values 
const plane = 'Airbus AB230'
console.log(plane.includes('BOEING'))
console.log(plane.includes('AB'))
console.log(plane.includes('Ab')) // case sensitive so will give false 
console.log(plane.startsWith('Air'))

if (plane.startsWith('Airbus') && plane.includes('230')) {
    console.log("part of the new boeing 230 family")
}


// practise 

// note 2 - there might also be uppercase letters in the argument
const checkBaggage = function (item) {
    const newItem = item.toLowerCase();
    if (newItem.includes('knife') || newItem.includes('liquid') || newItem.includes('inflammables')) {
        console.log("please remove")
    } else {
        console.log("you can move forward")
    }
}

checkBaggage('i carry laptop, knife ,soap,clothes and food')
checkBaggage('i carry laptop, KNIFE ,soap,clothes and food')
checkBaggage('i carry food,clothesand laptop')