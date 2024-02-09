'use strict'

const Car = function (made, speed) {
    this.made = made
    this.speed = speed
}

Car.prototype.accelerate = function () {
    this.speed = +10
    console.log(`${this.made} going at a spped of ${this.speed}`)
}

Car.prototype.break = function (made, speed) {
    const newSpeed2 = this.speed - 5;
    console.log(`${this.made} going at a spped of ${newSpeed2}`)
}


const EV = function (made, speed, battery) {
    Car.call(this, made, speed);
    this.battery = battery
}

//linking the prototype 
EV.prototype = Object.create(Car.prototype)

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo
}

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(`${this.made} going at a spped of ${this.speed}, with charge of ${this.charge}`)
}

const Tesla = new EV('tesla ', 120, 23)
Tesla.chargeBattery(90)
console.log(Tesla)
Tesla.break()
Tesla.accelerate()
// EV.prototype.chargeBattery = function ()
