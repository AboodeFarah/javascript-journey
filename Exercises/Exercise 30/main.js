// Task: Expand on the example provided. Implement two more callback functions: multiply and divide. Use the operate function to perform these operations on two numbers.

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
function divide(a, b){
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}

console.log("addition:", operate(2, 3, add));
console.log("multiplication:", operate(2, 3, multiply));
console.log("subtraction:", operate(10, 5, subtract));
console.log("division:", operate(3, 0, divide));