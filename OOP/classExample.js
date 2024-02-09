'use strict'

class Account {
    constructor(owner, currency, pin) {
        this.owner = owner
        this.currency = currency
        this.pin = pin
        this.movements = []

        //private fields--> #movements =[]

        //public field                
        this.locale = navigator.language

        // we havent declared movements and locale in the parameter as when we create an instance of the Account class, you don't need to provide values for movements and locale explicitly

        //also doing this is feasible when we want to allow external code to provide initial values for these properties
        console.log('thanks for opening account')
    }


    //public interface
    //this is lot better than to manually having to manipulate the properties 
    deposit(val) {
        this.movements.push(val)
    }

    withdrawal(val) {
        this.deposit(-val)
    }
    approveloan(val) {
        return true;
    }

    requestLoan(val) {
        if (this.approveloan(val)) {
            this.deposit(val);
            console.log('loan approved')
        }
    }
}

const acc1 = new Account('jonas', 'ind', 1424)
acc1.requestLoan(1000)

acc1.requestLoan(10) // this should never be accessible to user like we did here ...which shows that such values need only be accessed by the approve loan method only 

console.log(acc1)

// acc1.movements.push(250)
// acc1.movements.push(-140) --> instead of doing this we create deposit and withdrawal function


// encapulation 