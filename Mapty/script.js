'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


class Workout {
    date = new Date();
    id = (Date.now() + '').slice(-10)

    constructor(coords, distance, duration) {
        this.coords = coords //[lat.lng]
        this.distance = distance //in km
        this.duration = duration //in min
    }
}

class Running extends Workout {
    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration);
        this.cadence = cadence
        this.calcPace()
    }

    calcPace() {
        //in min/km
        this.pace = this.duration / this.duration
    }
}

class Cycling extends Workout {
    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration)
        this.elevationGain = elevationGain
        this.calcSpeed
    }

    calcSpeed() {
        this.speed = this.distance / (this.duration / 60)
    }
}

const run1 = new Running([39, -12], 5, 1, 150)
const cycle1 = new Cycling([39, -12], 25, 50, 500)

console.log(run1, cycle1)

//-------------------------------------------------------------------------

class App {
    #map;
    #mapEvent;
    #workouts = [];

    constructor() {
        this._getPosition();
        form.addEventListener('submit', this._newWorkout.bind(this));
        inputType.addEventListener('change', this._toggleElevationField)
    }

    _getPosition() {
        //geolocation a modern browser API --> takes two callback function as a input 
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                this._loadMap.bind(this),
                function () {
                    alert('Could not get your location!')
                })
        }

    }
    _loadMap(position) {

        // console.log(position)
        const { latitude } = position.coords;
        const { longitude } = position.coords;

        const coords = [latitude, longitude]

        // here map is te id of div we specified in the html file 
        //set view has two values one is the array of coordinates we wan to access and other is the zoom in/out status
        this.#map = L.map('map').setView(coords, 15);

        //map is made of small tile which comes from the specified url,leaflet also works with other maps such as google map 
        //this can also be used to change the URL
        L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);

        //we cannot directly use the addevent listener to map as we wont have the proper access to the coordinate we have clicked  --> we use some methods from the leaflet library
        //handling click on map
        this.#map.on('click', this._showForm.bind(this))

    }
    _showForm(mapE) {
        this.#mapEvent = mapE
        form.classList.remove('hidden');
        inputDistance.focus();

    }
    _toggleElevationField() {
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
    }
    _newWorkout(e) {
        const validInputs = (...inputs) =>
            inputs.every(inp => Number.isFinite(inp));
        const allPositive = (...inputs) => inputs.every(inp => inp > 0);
        e.preventDefault();

        //get data from form
        const type = inputType.value;
        const distance = inputDistance.value;
        const duration = inputDuration.value;


        //if running - create running object
        if (type === 'running') {
            const cadence = +inputCadence.value
            //check if data is valid

            if (
                !validInputs(distance, duration, cadence) ||
                !allPositive(distance, duration, cadence)
            )

                workouts = new Running([lat, lng], distance, duration, cadence);
        }

        //if cycling - create cycling object
        if (type === 'cycling') {
            //check if data is valid
            const elevation = +inputElevation.value

            if (
                !validInputs(distance, duration, cadence) ||
                !allPositive(distance, duration, cadence)
            )

                workouts = new Cycling([lat, lng], distance, duration, elevation);
        }
        //add new object to workout array

        //render workout on map as marker
        const { lat, lng } = this.#mapEvent.latlng;
        L.marker([lat, lng])
            .addTo(this.#map)
            .bindPopup(L.popup({
                maxWidth: 250,
                minWidth: 100,
                autoClose: false,
                closeOnClick: false,
                className: 'running-popup'
            }))
            .setPopupContent('workout')
            .openPopup();

        // render workout on list 

        //Hide the form + clear input feild
        //.value as we dont want to clear the entire element but only the value 
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';

        //diplay marker 

    }
}

const app = new App() //then constructor method is called when a new object is created from this class 


