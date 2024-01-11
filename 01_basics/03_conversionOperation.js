let score = "33"
let name = "avinash"
let value = true

console.log(typeof score);
console.log(typeof(score));

console.log(typeof name);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let valueInNumber1 = Number(name)
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

let valueInNumber2 = Number(value)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

// "33" => 33
// "avinash" => NaN
// true => 1; false => 0

let isLoggedIn = "avinash"
let isLoggedIn1 = 0


let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1);

// 1 => true; 0 => false
// "" => false
// "avinash" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);