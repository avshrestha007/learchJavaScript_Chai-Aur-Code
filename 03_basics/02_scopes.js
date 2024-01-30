// var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    // console.log(a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "Avinash"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true){
    const firstName = "Avinash"
    if(true){
        const lastName = " Shresth"
        // console.log(firstName + lastName);
    }
    // console.log(lastName);
}

// console.log(firstName);

// ++++++++++++++++++++ interesting ++++++++++++++++++++

console.log(addone(3));

function addone(num) {
    return num + 1
}

// console.log(addtwo(5));

const addtwo = function(num){
    return num + 2
}
