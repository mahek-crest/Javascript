'use strict';

const luftansa = {
    airline: 'Luftansa',
    code: "LF",
    booking: [],
    //below is advanced new literal syntax of defining a function
    book(flightNum, named) {
        const result = `${named} booked a seat on ${this.airline} flight ${this.code}${flightNum}`

        console.log(result);

        this.booking.push(result, named)

    },

}
luftansa.book(234, 'joans')
luftansa.book(311, 'firo')
console.log(luftansa.booking)

const eurowings = {
    airline: 'EuroWings',
    code: "EW",
    booking: [],
}


//eurowings is new airline of luftansa group for booking instead of using the same fucntion we use DRY and we use new function called book

// as booking is same for both luftansa and eurowings we can use call method to expllicitly define this keyword for eurowing rather than luftansa 

luftansa.book.call(eurowings, 123, "mark")// we can set value of this varible explicitly

//this can also be done using apply method --> apply method only takes two arguments so first argument is the object we want this to point to and second can be arraysif we have multiple items we want topass 
luftansa.book.apply(eurowings, ['ASD23', 'zoya'])

// only thing we have to look is at the property names we use for different object has to be same 