//------------DOM Traversing ------------

//basically walking through the dom
const h1 = document.querySelector('h1')



//-----going downwards(child elemnetns )
console.log(h1.querySelectorAll('.highlight'))
// this gives us all the child elements of h1
// as we use querySelector all we could get all the elememts but we have specified it for only h1
// this can go as deep as possible with specified class


//but when you wan to select direct child we use childnode
console.log(h1.childNodes) //here we will get all kinds of stuff such as text,comment , etc as we know they all are part of nodes

//sometimes we only want the element only 
console.log(h1.children) //this is a html collection --> live )(onlly works for direct children)

h1.firstElementChild.style.color = 'white'
h1.lastElementChild.style.color = 'white'

//--------going upwards(exploring child element )
console.log(h1.parentElement) //this direct parent

//we might need parent element as far as possible 
h1.closest('.header').style.background = 'var(--gradient-secondary)'
//this selected the closest header to h1 element and simply applied all style to that element

//closest is basically the opposit of query selector



//--------going sideways (exploring siblings )
//we can only access the direct siblings 
console.log(h1.previousElementSibling)
console.log(h1.nextElementSibling)