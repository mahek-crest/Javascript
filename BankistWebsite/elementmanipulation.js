// selecting elements

// selecting entire document of any webpage
console.log(document.documentElement)//this is document is not enough to select as document is not the real DOM element --> hence we aslo have to select the documentElement

// we can also seelct the body or only head element
console.log(document.head);
console.log(document.body);
// we generally dont neeed to write any selector query for this special elements

//we use querySelector for any specific element as
const header = document.querySelector('.header')
//quesrySelector returns the first element that matches the string

//but if we ant to select all the elements we have to use querySelectorAll
const allSection = document.querySelectorAll('.section')
console.log(allSection) //returns a node list
// not only from document but also from elements --> can be used to select child elements

// GETeLEment by id --> oly pass the id of specific element without the selector
//other such are shon below
console.log(document.getElementById('section--1'))

const allButton = document.getElementsByTagName('buttton')
console.log(allButton)
//this method returns a html collection which is different from node list
//this collection is so called live collection --> if we delete or add it gets updated here
//this does not happen with the nodelist --> static element

console.log(document.getElementsByClassName('.operations__header'))


//-------------Creating and inserting elements -----------

//to create elements we use  .innerAdjecentHTML (quick and easy)
//we can also do this in other way more programmatically

const message = document.createElement('div'); // this returns a Dom element and we can store it in variable
//this is not anywhere int he dom yet but we can use it as DOM object (not also in the webpage) --> we have to mannually add it
// can now be used as anyother ele
message.classList.add('cookie-message');
message.textContent = 'we use cookies for improved functionality'

//we can also insert html element 
message.innerHTML = 'we use cookies for improved functionality. <button class="btn btn--close-cookie">Got it!</button>"'

//showing it on the actual page 
header.prepend(message)

//we can aslo add it as the last child


// we see the element is only inserted once --> as this is the living in the DOM  --> and hence cannot be at multiple places at the same time
//the append moved the element from first to last child
//means we can use this not only to insert elements but also to move them

//to display it at multiple places -->have to first copy he first element
//header.append(message.cloneNode(true))

//more methods
// header.before(message)
// header.after(message)
//inserts the element before or after as specified --acts as siblings



//-----------------Delete element-----------------
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
    message.remove();
});// this is a recent method --> earlier we had to remove child element by first selecting parent ie
// message.parentElement.removeChild(message)
//this selecting paent element is called DOM traversing 