// do while loop

let i = 10;
do{
    console.log("nimber: " + i)
    i++
}while(i<=20);

// real example

let password;

do{

    password = prompt("enter your password");
    
}while(password !== "123");

console.log("welcome user");