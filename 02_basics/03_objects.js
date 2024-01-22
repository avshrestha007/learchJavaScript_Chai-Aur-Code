// singleto

// object literals

const mySym = Symbol("key1") // Imp Interview- declear symbol than act as a key then print it.

const jsUser = {
    name: "Avinash",
    "full name": "Avinash Shrestha",
    [mySym]: "mykey1",   // Imp - symbol as key.
    age: 25,
    location: "Varanasi",
    email: "avshrestha7@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.name); // Normal way to access object's value;
console.log(jsUser["email"]); // Other Type to access object's value;

// console.log(jsUser.full name);  Not Allowed
console.log(jsUser["full name"]); //Right Way

console.log(jsUser[mySym]); // printing the symbol 

jsUser.email = "avshrestha6@gmal.com"
/*Object.freeze(jsUser);*/  // for  freeze objexct's value;
jsUser.email = "avshresths007@gmail.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hellow JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hellow JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());