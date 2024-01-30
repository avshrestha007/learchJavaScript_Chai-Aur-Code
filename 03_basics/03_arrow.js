const user = {
    username: "Avinash",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "Avinash"
//     console.log(this.username);
// }

// chai()

// const chai = function chai() {
//     let username = "Avinash"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Avinash"
    console.log(this);
}
// chai()

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

// const addtwo = (num1, num2) => num1 + num2

const addtwo = (num1, num2) => ({username: "Avinash"})

console.log(addtwo(1,1));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()