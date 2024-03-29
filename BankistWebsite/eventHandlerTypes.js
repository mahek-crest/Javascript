'use strict';

//event is basically a signal generated by certain dumb note .example click or mouse moving , etc

//  When events occur in JavaScript, an object that contains information about that event gets created. This object will then be passed as an argument to the event handler function.

//list and fold events using event listeners

const h1 = document.querySelector('h1')
const logo = document.querySelector('.nav__logo')

// h1.addEventListener('mouseenter', function (e) {
//     alert("hello")
// })
// you can't specify two different events in one event listener

//another way to do this
// using the onevent property directly on the element ..examples
// h1.onclick = () => {
//     alert("You encountered a on click event listener ")
// }


//for each event we have an event listerner propeerty and onevent property like above

//------------removing an event handler
// we need to export the function into named function

const alertH1 = (e) => {
    alert('hello2');
    // h1.removeEventListener('mouseenter', alertH1);
};
h1.addEventListener('mouseenter', alertH1);

//can also remove this event listener after some time has passed 
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 5000)

//3rd way of handling events is html attribute --> directly writting on the html but is preferred not to use it 