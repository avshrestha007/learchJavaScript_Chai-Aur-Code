const name = "Avinash"
const age = 26

// console.log(name + age + " Dev");

console.log(`Hello my name is ${name} and my is ${age}`);

const gameName = new String('AvinashShrestha')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0, 9)
console.log(newString);

const anotherString = gameName.slice(0, 1)
console.log(anotherString);

const newStringOne = "   avinash   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://avinash.com/avinash%20shrestha"

console.log(url.replace('%20','-'));

console.log(url.includes('sunday'));

const gameName1 = new String('Avinash-Shrestha-25')

console.log(gameName1.split('-'));