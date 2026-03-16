

// function greet(name){
//     console.log("Hello ", name);
// }
// function processUserInput(callback){
//     const message = prompt("Please enter your name.");
//     callback(message);
// }
// processUserInput(greet);


function operate(num1, num2, callback){
    return callback(num1, num2);
}

function add(a, b){
    return a + b;
}
function multiply(a, b){
    return a * b;
}
function subtract(a, b){
    return a - b;
}

console.log("addition:", operate(2, 3, add));
console.log("multiplication:", operate(2, 3, multiply));
console.log("subtraction:", operate(10, 5, subtract));
