'use strict';

// -------------MAPS--------------

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

//-----------forEach on maps-----------

currencies.forEach(function (value, key, map) {
    console.log(`${key} : ${value} `)
})


// -------------sets--------------
const currenciesSet = new Set(['USD', 'IND', 'GBP', 'USD', 'EUR', 'EUR'])
console.log(currenciesSet)

currenciesSet.forEach(function (value, _, set) {
    console.log(`${value} : ${_}`)
})
// here we get same value for item and value
// (_) is a convention in JavaScript to indicate that the corresponding parameter (in this case, the key) is not going to be used in the loop body.