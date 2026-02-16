// ### Exercises

// 1. **Function Basics:**
    
//     Create a function named `add` that takes two parameters and returns their sum. Test the function by calling it with different arguments.
    
// 2. **Function Expressions:**
    
//     Convert the `add` function to a function expression and call it with different arguments.


//EX 1
function add (x,y){
    return x+y;
}
let result = add(12,83);
let result2 = add(847,94);
let result3 = add(637,973);
console.log(result);
console.log(result2);
console.log(result3);


// EX 2
let Add = function(a,b){
    return a+b;
}
let results = Add(33,65);
let results2 = Add(422,298);
console.log(results)
console.log(results2)
