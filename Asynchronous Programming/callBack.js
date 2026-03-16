

function greet(name){
    console.log("Hello ", name);
}
function processUserInput(callback){
    const message = prompt("Please enter your name.");
    callback(message);
}
processUserInput(greet);