// Object

let person = {
    name : "aboode",
    age : 23,
    city : "ceelbuur",
    bloodType : "AB+"
}
// console.log(person.name)
// console.log(person.age)
// console.log(person.city)
// console.log(person.bloodType)


// array ways

console.log(person["name"])


// adding and modifying properties

let person2 = {
    name : "aboode",
    age : 23,
    city : "ceelbuur",
    
}

person2.birthDay = 2002-2-16;  // Adding a new property
console.log(person2);         //output  name:'aboode',age:23,city:'ceelbuur',birthDay: 1984

person2.age = 30;   // Modifying an existing property
console.log(person2);   //output  name: 'aboode', age: 30,city: 'ceelbuur', birthDay: 1984


// method in object 


let person3 = {
    name : " aboode",
    age : 23,
    city : "ceelbuur",
    greeting : function(){
        console.log("hello world!")
    },
    add : (a,b) =>{
        return a+b;
    },
    greeting2 : function(){
        console.log("hello how are you" + this.name)
    },

}
console.log(person3.add(3,2));
console.log(person3.greeting2())