// Write a for...in loop that logs each property and value of the object { name: "Alice", age: 25, city: "Wonderland" }.

let personal = { name: "Alice", age: 25, city: "Wonderland" }

for( let key in personal){
    console.log(key +" : "+personal[key])
}
