'use strict';

const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
//if we use brackets in arrow function we have to use return keyword

const randomColor = () => `rgb(${randInt(0, 255)},${randInt(0, 255)},${randInt(0, 255)})`

document.querySelector('.nav__link').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();

    //***/
    //e.stopPropagation()//this will now not let change in colors in thae whole bar except the nav__link --> generally not an good idea but can some times fix problem in complex situations 
})
//NOTE --> in event handler the this keyword always points to the event on which the event handler is attached 

document.querySelector('.nav__links').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
})//if click on this part of the navbar it doesnt change color for thmain link like feature it only bubbles out to its parent element 

document.querySelector('.nav').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
})

//to stop propogation we have to specify in the queryselector function -- shown as ** in the nav__link qyeryselector

/// if we wan to capture events n capturing phase we have to give third parameter in the addEvent listener function--> this is generally not done 