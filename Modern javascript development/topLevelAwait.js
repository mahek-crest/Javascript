//we can now use await keyword outside the async function -----> this is only if we are using an module 
// import { addToCart } from "./shoppingCart";

// const res = await fetch('https://jsonplaceholder.typicode.com/comments')
// const data = await res.json()
// console.log(data)

// console.log('hiiii')

//this allseems really helpful  but this but this blocks exeution of the entire module
// hence useful in only some situations as it is harmful

const getLastPost = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log(data)

    return { title: data.at(-1).title, text: data.at(-1).body }
}
const lastPost = getLastPost() // here we get pending promise as result and not we were expecting
//this is because we use asyn function which returns a promise
//runningthe last line and we dont have the data yet
//THE JOB WAS TO USE SIMPLE REGULAR PROMISE

//this is isnt too clean 
lastPost.then(last => console.log(last))

//another method for the above 
const lastPost2 = await getLastPost()
console.log(lastPost2)


// important application of toplevel await
//if one module imports a module which has top level await then the importing module wait for the imported module to finidh blocking the code 