'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////


//making the ajax call 



//we might receive data from the server in different formats  they can be either xml or jsaon
//for this dat to be displayed on the webpage we convert it into objects like shown below 

const displayCountries = function (data) {
  const valueCurr = Object.keys(data.currencies)
  const valueLang = Object.values(data.languages)

  const html = `<article class="country">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
          <h3 class="country__name">${data.altSpellings[1]}</h3>
          <h4 class="country__region">REGION : ${data.region}</h4>
          <p class="country__row"><span>👫</span>${data.population} people</p>
          <p class="country__row"><span>🗣️</span>${valueLang}</p>
          <p class="country__row"><span>💰</span>${valueCurr}</p>
          
        </div>
      </article>`

  countriesContainer.insertAdjacentHTML('beforebegin', html)
}


const countryoInfo = function (country) {
  const request = new XMLHttpRequest()
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`, true)
  request.send()

  request.addEventListener('load', function () {
    //coverting string to javacript object 
    let [data] = JSON.parse(request.responseText)
    console.log(data)
    displayCountries(data)
  })
}

//doing this using the fetch api object
// const countryInfo = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       return response.json()
//     }).then(function (data) {
//       displayCountries(data[0])
//     })
// }

// countryInfo('usa')
// countryInfo('germany')
// countryInfo('uk')


//improving the above promise -- we want then to be displyed in specific order like we did using callback hell  --but htis is using then and catch
const countryInfo = function () {
  fetch(`https://restcountries.com/v3.1/name/usa`)
    .then(function (response) {
      return response.json()
    })

    .then(function (data) {
      displayCountries(data[0])
      return fetch(`https://restcountries.com/v3.1/name/uk`)
    })

    .then(function (response) {
      return response.json()
    })

    .then(function (data) {
      displayCountries(data[0])
    })
}
countryInfo()

// here the countries will appear in different order everytime this is  due to the asynchronus natuire of javascript 
//to have them in specific order we can use call back hell
// this can be acheived by using callback function inside other function 
// but this leads to callback hell
// it makes the code unreadable and messier to manage 

// hence we use promises in javascript to acheive similar kind of interface but without having to use the call back function