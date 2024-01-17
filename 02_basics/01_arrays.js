// Arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", "Iron Man", "Superman", "Krish"]
const myArr1 = new Array(1, 2, 3, 4)

console.log(myHeros[1]);
console.log(myHeros.length);
console.log(myArr1);

// Array Methods

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)
myArr.shift()

console.log(myArr.includes(9));
console.log(myHeros.indexOf("Superman"));

const newArr = myArr.join()

console.log(myArr);
console.log(newArr);

// Slice and Splice Method

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);

console.log("B", myArr);  // Original Array not Menupulated

const myn2 = myArr.splice(1, 3)

console.log(myn2);

console.log("C", myArr);  // Manupulate Original Array