//we have been using  import statements in the previous files but it is not advisable
// parcel is a build which is present on npm

//here parcel in only installed locally --> only for this project

// npx parcel index.html -> here index.html as it is the root file

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
    cart: [
        { product: "bread", quantity: 5 },
        { product: "cake", quantity: 5 }
    ],
    user: { loggedIn: true }
}

const deepCloneState = cloneDeep(state)
console.log(deepCloneState)


