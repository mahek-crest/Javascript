// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = function (ages) {
    const humanAge = []
    ages.forEach(age => {
        if (age <= 2) {
            humanAge.push(2 * age)
        } else {
            humanAge.push(16 + age * 4)
        }
    });
    console.log(humanAge)

    const dogs = humanAge.filter((age) => age >= 18)
    console.log(dogs)

    const avgAge = dogs.reduce((acc, age) => {
        return acc + age
    }, 0) / dogs.length
    console.log(avgAge)
}
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])

// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

console.log('---------------------chaining methos---------------------')
const calcAverageHumanAge2 = function (ages) {
    const humanAge = []
    ages.forEach(ages <= 2 ? humanAge.push(2 * ages) : humanAge.push(16 + ages * 4))
        .filter((age) => age >= 18)
        .reduce((acc, age) => {acc + age }, 0) / dogs.length
    console.log(avgAge)
}
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
    
