'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.altspellings}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0]}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0]}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0])
      console.log(data)
      console.log(data.flags)
    })



};

getCountryData('usa')

//catch --> to catch errors all at once

//finally --> callback fucntion that executres wether the promises  was fulfilled or not

//we are able to execute the finally statement as the catch returns a promise

//throwing errors manually 