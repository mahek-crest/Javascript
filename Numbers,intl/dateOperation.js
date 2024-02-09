'use strict'

const future = new Date(2024, 11, 29, 12, 2, 23); // Note: Months are zero-based (11 represents December).
console.log(+future);

const calcDaysPassed = (date1, date2) => (date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2024, 6, 24), new Date(2024, 6, 25)); // Note: Months are zero-based (6 represents July).
console.log(days1);
