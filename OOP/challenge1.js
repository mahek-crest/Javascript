/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (made, speed) {
    this.made = made
    this.speed = speed
}

// Car.prototype.accelerate = function (speed) {
//     const newSpeed = this.speed + 10;
//     console.log(newSpeed)
// }
//above can be written as -- video 
Car.prototype.accelerate = function () {
    this.speed = +10
    console.log(`${this.made} going at a spped of ${this.speed}`)
}


Car.prototype.break = function (made, speed) {
    const newSpeed2 = this.speed - 5;
    console.log(`${this.made} going at a spped of ${newSpeed2}`)
}

const BMW = new Car('bmw', 20)
console.log(BMW)
BMW.accelerate()

const audi = new Car('ausi', 24)
console.log(audi)
audi.break()

// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class Car2 {
    constructor(made, speed) {
        this.made = made
        this.speed = speed
    }

    //above can be written as -- video 
    accelerate() {
        this.speed = +10
        console.log(`${this.made} going at a spped of ${this.speed}`)
    }
    break(made, speed) {
        const newSpeed2 = this.speed - 5
        console.log(`${this.made} going at a spped of ${newSpeed2}`)
    }

    get sppedUs() {
        return this.speed / 1.6
    }
}

const ford = new Car2('fors', 120)