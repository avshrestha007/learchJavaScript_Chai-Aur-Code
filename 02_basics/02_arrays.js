const marvelHeros = ["thor", "ironman", "spiderman"]
const dcHeros = ["superman", "batman", "flash"]

marvelHeros.push(dcHeros)

// console.log(marvelHeros);
// console.log(marvelHeros[3][2]);

const allHeros = marvelHeros.concat(dcHeros) // Limit only 2 arrays
// console.log(allHeros);

const allNewHeros = [...marvelHeros, ...dcHeros]
// console.log(allNewHeros);

const anotherArray = [1, 2, 3, 4, [5, 6, 7], 8, [9, 10, [11, 12]]]

const realAnotherArray = anotherArray.flat(Infinity)
// console.log(realAnotherArray);

console.log(Array.isArray("Avinash"));
console.log(Array.from("Avinash"));
console.log(Array.from({name: "Avinash"})); // Imp Note

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));