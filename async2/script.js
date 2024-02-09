'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////


const displayCountries = function (data, className = '') {
  const currLang = Object.values(data.languages)
  const currency = Object.keys(data.currencies)

  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.altSpellings[0]}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${data.population}</p>
      <p class="country__row"><span>🗣️</span>${currLang}</p>
      <p class="country__row"><span>💰</span>${currency}</p>
    </div>
  </article>`

  countriesContainer.insertAdjacentHTML('beforebegin', html)
}

// const countryInfo = function (country) {
//   const xhr = new XMLHttpRequest()
//   xhr.open('GET', 'https://restcountries.com/v3.1/name/' + country)
//   xhr.send()

//   xhr.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText) //gives us an object from the json result we got from the api P
//     console.log(data)

//     displayCountries(data)
//   })
// }

// countryInfo('usa')
// countryInfo('portugal')
// countryInfo('uk')

//------------implmenting callback hell ----------------
// we wan tthe next function call to be the neighbouring country so destructuring the neighbour propertt

const countryInfoAndNeighbour = function () {
  // ---------Country call 1---------
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://restcountries.com/v3.1/name/usa')
  xhr.send()

  xhr.addEventListener('load', function () {
    const [data] = JSON.parse(xhr.responseText) //gives us an object from the json result we got from the api P
    console.log(data)
    displayCountries(data)

    const [neighbour] = data.borders;
    console.log(neighbour)
    if (!neighbour) return;
    // ---------Country call 2---------
    const xhr2 = new XMLHttpRequest()
    xhr2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`) //as we were getting country code
    xhr2.send();
    xhr2.addEventListener('load', function () {
      const data2 = JSON.parse(xhr2.responseText)
      // console.log(xhr2.responseText)
      displayCountries(data2, 'neighbour')

      const [neighbour2] = data2.borders;
      if (!neighbour2) return;
      console.log(neighbour2)

      // ---------Country call 3---------
      const xhr3 = new XMLHttpRequest()
      xhr3.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour2}`)
      xhr3.send();
      xhr3.addEventListener('load', function () {
        const [data3] = JSON.parse(xhr3.responseText)
        // console.log(xhr2.responseText)
        displayCountries(data3, 'neighbour')
      })
    })
  })
}
countryInfoAndNeighbour()