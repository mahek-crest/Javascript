'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to')
const header = document.querySelector('.header')
const message = document.createElement('div');
const section1 = document.querySelector('#section--1')
const section2 = document.querySelector('#section--2')
const section3 = document.querySelector('#section--3')
const tabs = document.querySelectorAll('.operations__tab')
const tabContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content')

//--------------------------------------------Modal Window---------------------------------------------

const openModal = function (e) {
  e.preventDefault(); // this prevents page from scrolling back (it happens because its a link href=# which makes page jump back to top)
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// btnsOpenModal gives an nodelist as it is result from query selector -->nodelist is notan array but has foreach method like arrays
btnsOpenModal.forEach(btn => { btn.addEventListener('click', openModal) })

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//-----------------------------------------------Sticky Navigation ---------------------------------------------
// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function () {
//   if (window.scrollY > initialCoords.top / 3) {
//     nav.classList.add('sticky')
//   } else {
//     nav.classList.remove('sticky')
//   }
// })
//scroll event is not really efficient 

//using new method to implement the same thing 
//Intersection observer API 
const stickyNav = function es(entries) {
  const [entry] = entries; //same as entris[0] but we are using destructor 

  if (!entry.isIntersecting) {
    nav.classList.add('sticky')
  } else {
    nav.classList.remove('sticky')
  }
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: '-90px'
})
headerObserver.observe(header)

//--------------------------------------------------------Page navigation----------------------------------------------------
//using bubbling to implement event delegation

// 1) without event delegation 
// document.querySelectorAll('.nav__link').forEach(
//   function (el) {
//     el.addEventListener('click', function (e) {
//       e.preventDefault() //to prevent default behaviour of scrolling due to anchors 
//       // this is all due to requirement of smooth navigation
//       const id = this.getAttribute('href')
//       document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
//     })
//   })
//this event handler handler function is added to the each od these 3 elements --> this is creating multiple copies of the same element and hence might impact the performance for large scale of elements(not an efficient method)

//what to do ? ----> use event delegation 
//we use the fact that the event bubbles up ..we do it by putting event listner on a common parent of all elements 
// 1) with event delegation --> can be done in 3 steps 
// a) add event listner to common parent
// b) determin what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target)//e.target stores where and see where the  actual event happens

  //matching strategies --> to ignore the clicks which didnot happen right on the link
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault()
    const id = e.target.getAttribute('href') //we cannot use it as the href attribute is now not on this but on the e.target -->which was clicked 
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
  }
})

//one more important usecase is when we are working with elements that are not yet on the page on runtime 
//example of this is adding buttton dynamically while using the application


//----------------------------------------------tabbed components-----------------------------------------------


tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab')

  // ----------this is called an gaurd class
  if (!clicked) return; // this is to prevent clicks where the result is null doesnt throw error and it doesnt execute the below line of code 

  //--------activate tab area
  tabs.forEach(function (t) {
    t.classList.remove('operations__tab--active') // for the up down effeect we remove it from all before adding to the selcted element
  })
  clicked.classList.add('operations__tab--active')

  //--------activate content area
  tabsContent.forEach(function (t) {
    t.classList.remove('operations__content--active') // removing the active class from this first 
  })

  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
})

//---------------------------------------------fading effect on the nav ----------------------------------

const nav = document.querySelector('nav')

//here things get very repetative so we put it into new function and use arguments in the event listener
const hoverHandle = (e, opacity) => {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const sibling = link.closest('.nav').querySelectorAll('.nav__link')

    sibling.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    })
  }
}

//earlier we had used mouseenter which is similar to mouseover but the problem is mousereneter doesnt bubble
// nav.addEventListener('mouseover', hoverHandle(e,0.5)) --> this is not going to work as addeventListener expects a function ..but we we call the function then all the arg will become other value --> here we get undefined as we dont return anything
// solution --> still have the callback function and inside that we cal the function here 
//method 1 
nav.addEventListener('mouseover', function (e) {
  hoverHandle(e, 0.5)
})
nav.addEventListener('mouseout', function (e) {
  hoverHandle(e, 1)
})

// we can also optimise the code and use bind method --> method 2
//----------passsing 'argument into function '
// nav.addEventListener('mouseover', hoverHandle.bind(0.5))
// nav.addEventListener('mouseout', hoverHandle.bind(1))

//all this is done as the handler function can only take one argument and we only pass the event generally -->  and if more argument is needed we use this keyword and if we want multiple values we can pass in array or object 

//-------------------------------------------------for learn more button---------------------------------------------
document.querySelector('.learnmore').addEventListener('click',
  function (e) {
    e.preventDefault()
    const id = this.getAttribute('href')
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
  })



//--------------------------------------------------Adding Cookie box---------------------------------//


message.classList.add('cookie-message');

message.innerHTML = 'we use cookies for improved functionality. <button class="btn btn--close-cookie">Got it!</button>"'

header.append(message);

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
});

message.style.backgroundColor = '#37383d'
message.style.width = '120%'
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';




//---------------------------------------------------Smooth Scroll-------------------------------------------//
// click and scroll (2 methods)


// btnScrollTo.addEventListener('click', function (e) {
//   var s1coords = section1.getBoundingClientRect();
//   console.log(s1coords)

//   console.log(e.target.getBoundingClientRect())

//   //scrolling
//   //this doesnt work correctly when we scroll a little and click the button as we spcified top is relative to the view port
//   //we add current scroll position to this top value to avoid this situation
//   // window.scrollTo(s1coords.left , s1coords.top )

//   //by doing this we get the absolute position of the realtive to the document
//   // window.scrollTo(
//   //   s1coords.left + window.scrollX,
//   //   s1coords.top + window.scrollY)

//   //making improvements in the current to make it nice and smooth --> passing object intead of one argument

//   //method 1
//   // window.scrollTo({
//   //   left: s1coords.left + window.scrollX,
//   //   top: s1coords.top + window.scrollY,
//   //   behavior: 'smooth'
//   // })

//   // method 2  --> supported in modern browsers 
//   section1.scrollIntoView({ behavior: 'smooth' })

// })



//---------------------------------------------------reveling elements on  Scroll-------------------------------------------//

//by intersection we mean that is it visible 
//threshold means at how much you want it to be visible --it is in percentagebetween 0 to 1

const allSections = document.querySelectorAll('section')

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry)

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
})

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden')
})

// ---------------------------------------------showing images while scrolling (lazy loading)-----------------------------------------//

const imgs = document.querySelectorAll('img[data-src]')

const revealImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img')
  })

  observer.unobserve(entry.target)
}

const imgObserver = new IntersectionObserver(revealImg, {
  root: null,
  threshold: 0.5
})

imgs.forEach(img => imgObserver.observe(img))



//------------------Slider--------------------

const slides = document.querySelectorAll('.slide')
const btnLeft = document.querySelector('slider__btn--left')
const btnRight = document.querySelector('slider__btn--right')

let currentSlide = 0;
const maxSlide = slides.length

const slider = document.querySelector('.slider')
slider.style.transfrom = `scale(0.4) translatex(-800px)`
slider.style.overflow = 'visible'

slides.forEach((s, i) => (s.style.transfrom = `translate(${100 * i}%)`))

//to move to next slide 
btnRight.addEventListener('click', function () {

  if (currentSlide === maxSlide) {
    currentSlide = 0
  } else {
    currentSlide++;
  }

  slides.forEach((s, i) => (s.style.transfrom = `translate(${100 * (i - currentSlide)}%)`))

})