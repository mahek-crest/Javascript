// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age)
// console.log(oldAge)

// const jonas = {
//     age: 30,
//     firstName: 'jonas'
// }

// const friend = jonas
// console.log(jonas.age)
// console.log(friend.age)
// jonas.age = 25
// console.log(friend.age)

//in referncing types that is objects we use assign method tocopy the object this also helps in preserving the value--> bur this is only shallow copy 

//shallow copy example

const jonas = {
    age: 30,
    firstName: 'jonas',
    lastName: "william",
    family: ['bro', 'sis'],
}
const newJonas = Object.assign({}, jonas)
newJonas.lastName = "davs"
newJonas.family.push('mary'); //this requires deep clone rather than shallow clone due to memory heap 

console.log("old lastname: ", jonas)
console.log("new lastname: ", newJonas)


//deep clone
const jonas2 = {
    age: 30,
    firstName: 'jonas',
    lastName: "william",
    family: ['bro', 'sis']
}
//-->deep clone is very complex is usually done using libraries--> later  section