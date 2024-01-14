// Primitive Data Types
// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol("123")

console.log(id === anotherId);

const bigNumber = 45678037682334432n

// Reference / Non Primitive Data Types
// Array, Object, Functions

const arr = ["X", "Y", "Z"]

let obj = {
    name : "avinash",
    age : 25
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof anotherId);
console.log(typeof bigNumber);
console.log(typeof arr);
console.log(typeof obj);
console.log(typeof myFunction);

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "Avinash"

let anotherName = myYoutubename
anotherName = "Shrestha"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    name: "xyz"
}

let userTwo = userOne

userTwo.email = "avshrestha@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);