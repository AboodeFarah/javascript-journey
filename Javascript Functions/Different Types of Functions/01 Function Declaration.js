// Syntax
// function functionName(parameters) {
//     code to be executed
// }
// functionName()


//examples:

// function name() {
//     console.log("hello aboode farah");
// }
// name()


// using Parameters and Arguments
function greeting(name){   //parameters is name "is like variable inside function"
    console.log("hello " + name)  //here we conect the string with variable 
}

greeting("aboode farah")  //argument is the value of function parameters


// Return Value
function add(a,b){
    return a+b;     //Nothing after return runs
}
let result = add(20,20);     //Here we call the function with arguments 20 and 20. return 40
console.log(result);        //prints whatever is stored in result.
