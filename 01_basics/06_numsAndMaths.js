const score = 400
console.log(score);

const balance = new Number(400)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.879

console.log(otherNumber.toPrecision(3));

const humdreds = 1000000
console.log(humdreds.toLocaleString('en-IN'));

// ++++++++++++++++++ Maths ++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(23, 56,24,66,3,6));
console.log(Math.max(34,56,25,67,25,78,99));

console.log(Math.random());
console.log((Math.random()*10));
console.log((Math.random()*10) + 1);

const min = 1
const max = 10

console.log(Math.floor(Math.random() * (max - min + 1)) + min);