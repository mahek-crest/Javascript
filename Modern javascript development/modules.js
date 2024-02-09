import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
    cart: [
        { product: "bread", quantity: 5 },
        { product: "cake", quantity: 5 }
    ],
    user: { loggedIn: true }
}

const stateClone = Object.assign({}, state)
stateClone.user.loggedIn = false
// console.log(stateClone)
//this is a shallow clone hence referencing the same place
// to do the task without changing the current object we have multiple products ---either to use JSON.parse(JSON.stringify(state)) or lodash librabry

//using lodash library

const deepCloneState = cloneDeep(state)
console.log(deepCloneState)

