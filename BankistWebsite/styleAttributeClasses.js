'use strict';

// using the message element from element manipulaton
const header = document.querySelector('.header')
const message = document.createElement('div');

message.classList.add('cookie-message');

message.innerHTML = 'we use cookies for improved functionality. <button class="btn btn--close-cookie">Got it!</button>"'

header.append(message);

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
    message.remove();
});

//----------------styles------------------
//to set style to element we get the element and use style method on it
// remember to use the camel case property as we did earlier --> for the property name
//remember all this style are set as inline styles --> so set directly in the DOM 

message.style.backgroundColor = '#37383d'
message.style.width = '120%'

console.log(message.style.height)//we get nothingas using style property is only for inline styles --> we cannot get get style hidden(that is the style sheet) or doesnt even exist

//However, if the height property is not explicitly set as an inline style, or if it is set through a style sheet (external or internal), this line will log an empty string or undefined

// The style property only gives you access to the inline styles applied directly to the element.




console.log(message.style.width) //this is accessible as it is inline style

//f a style is not set inline, or if it's set in a style sheet, you would need to use other methods to retrieve that information.
//we can get the hidden style(external css) --. this can be done as

//console.log(getComputedStyle(message)) //get the huge object which contains all the properties and its value 
console.log(getComputedStyle(message).color) //now we can access the color from the stylesheet

//now declaring style which is not in the style sheet ---> height --> computed value is given to us
// using that to increase the height as shown below 
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

//--------Custom Proprty---------
//document.documentElement.style.setProperty('--color-primary', 'orangered') // here documentElementis the root element



//------------------Attribute ------------------

const logo = document.querySelector('.nav__logo')
//we can access the default properties 
console.log(logo.alt)



// if we add some other prperty which is not standard then javascript will not automatically create property on the object
//non standard property 
console.log(logo.designer)

// but to read non standard property we can use the following method 
console.log(logo.getAttribute('designer ')) //will retunr null as we didnt explicitly set it

//opposite of getAttribute 
console.log(logo.setAttribute('company', 'bankiest'))

//setting properties
logo.alt = 'beautiful logo';

console.log(logo.src)//gives us the absolute URL (we have used relative url)
// to get relative we use the below method 

console.log(logo.getAttribute('src'))

//this similar thing can be done for href too
const link = document.querySelector('.nav__link--btn')
console.log(link.href)
console.log(link.getAttribute('href'))


//--------------Data Attribute-------------
//it has to start with data-()
//use camelcase
//use .dataset to access the value 
console.log(logo.dataset.versionNumber)


//-----------------Classes----------------
logo.classList.add('exaple')
logo.classList.remove('exaple', 'example2') //can aslo add multiple classnames 
logo.classList.toggle('exaple')
logo.classList.contains('exaple')

//can also set a class
//logo.className = 'joans'// however dont use this as it overwrites all the existing class names

// thats why above formatters are useful as it allows us to add or remove classes based on their names without interfering with already existing classes 