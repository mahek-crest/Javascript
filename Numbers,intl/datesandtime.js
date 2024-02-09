'use strict'

// create a date 
// console.log(new Date('Aug 02 2023'))

const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,

    movementsDates: [
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-01-28T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2020-05-08T14:11:59.604Z',
        '2020-05-27T17:01:17.194Z',
        '2020-07-11T23:36:17.929Z',
        '2020-07-12T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
};

// console.log(new Date(account1.movementsDates[0]))
// console.log(new Date(2034, 10, 15))

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000)) //exactly after 3 days



const now = new Date();
console.log(new Intl.DateTimeFormat('gu-IN').format(now))