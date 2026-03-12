// JSON stand for javascript object notation.

const user = {
    name: 'John',
    age: 30,
    city: 'New York'
};
console.log(user); 

// Convert JavaScript object to JSON string
const jsonString = JSON.stringify(user);
console.log(jsonString);

// Convert JSON string back to JavaScript object
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
