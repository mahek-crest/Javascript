'use strict'

const images = document.querySelector('.images')

const img = `<div class="images" style="height: 200px; width: 200px;"></div>`

const countryInfo = function (country) {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.blob())
        .then((blob) => {
            const imageUrl = URL.createObjectURL(blob);

            // Insert the img element before the .images div
            images.insertAdjacentElement('beforebegin', img);
        })
        .catch(error => console.error('Fetch error:', error));
}
countryInfo()
