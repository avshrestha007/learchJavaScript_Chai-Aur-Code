const accountId = 12345
let accountEmail = "avshrestha@gmail.com"
var accountPassward = "12345"
accountCity = "Varanasi" // Wrong Approch
let accountState;

// accountId = 23 // not allowed
accountEmail = "avshrestha7@gmail.com"
accountPassward = "67890"
accountCity = "Mughalsarai"

console.log(accountId);

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassward, accountCity, accountState])