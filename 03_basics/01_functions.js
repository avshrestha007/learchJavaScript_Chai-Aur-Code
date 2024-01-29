function myName(){
    console.log("A");
    console.log("V");
    console.log("I");
    console.log("N");
    console.log("A");
    console.log("S");
    console.log("H");
}

// myName();

// function addTwoNumber(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumber(num1, num2){
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
}

const result = addTwoNumber(2, 2)

// console.log("result", result);

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Avinash"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(12, 23, 34, 45, 56));

const user = {
    username: "Avinash",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// handleObject({
//     username: "Rishabh",
//     price: 399
// })

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 500]));