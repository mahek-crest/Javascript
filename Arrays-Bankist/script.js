'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  // before adding anything we have to remove hard coded elemts from it
  containerMovements.innerHTML = ''; // .textContent=0

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'

    //manipulating/overwriting values from the objects 
    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html)// if we use before end each new element will be added before previous one hence we get a reverse stack

  })
}
// displayMovements(account1.movements) 

// ----------------------------------------------------

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) =>
    acc + mov
    , 0);
  labelBalance.textContent = `${balance} EUR`
}
// calcDisplayBalance(account1.movements)

// ----------------------------------------------------

const calcDisplaySummary = function (acc) {
  //income summary
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income} EUR`  

  //out summary
  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} EUR` 
  
  //interest --> when deposited (1.2 each )
  const interest = acc.movements
    .filter(deposit => deposit > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(deposit => deposit>1)
    .reduce((acc, int) => acc + int, 0);
  
  labelSumInterest.textContent = `${Math.abs(interest)} EUR`


}
// calcDisplaySummary(account1.movements)

// ----------------------------------------------------

const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase().split(' ').map(word => word[0]).join('');
  })
} // not need to do anything (return or console)-- as we produce side effect

createUserName(accounts)


// ----------------------------------------------------
let currentAccount;

btnLogin.addEventListener('click', function(e){
  // console.log('Login') //--> we can see it for a flash of scond and page reloads as this button is in form element and when click for submit button is for page to reload to prevent this we do the following that is preventDefault
  e.preventDefault();
  // console.log('login') // now it wont reload 

  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount)

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display ui
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100;

    
    //display movement
    displayMovements(currentAccount.movements)
    
    //display balncce
    calcDisplayBalance(currentAccount.movements)
    
    //display summary
    calcDisplaySummary(currentAccount.movements)
    
    
    //clear input field --> getting rid of the id password after login in
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
  }

})