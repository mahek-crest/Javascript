var firstName = "jon"

const jonas = {
    firstName: 'Jonas',
    year: 2001,

    calcAge: function () {
        console.log(this)
        console.log(2030 - this.year)
    },

    greet: () => console.log(`hey ${this.firstName}`)
}
jonas.greet();

//arguments keyword
//adding arguments more than specified