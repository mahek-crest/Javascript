'use strict';

//AJAX--> Asynchronous javascript and Xml
//not an lang but set of existing web tech
//helps in fetching data asynchronusly from remote server
//when data is loaded by ajax it is loaded without page reload/refresh


// How do we make AJAX call ?
// to do this in js we use XMLHttpRequest
//this send request to server ad we get the response from it

// can be sent in 3 simple steps
//1) create a new xmlhttprequect object
//2) create a request
//3) send the request

const btn = document.getElementById('fetchBtn')

const xhr = new XMLHttpRequest()

xhr.open('GET', 'data.txt', true)

xhr.send()

xhr.onprogress = function () {
    document.getElementById('data').textContent = 'Loading'
}

xhr.onload = function () {
    document.getElementById('data').textContent = xhr.responseText
}