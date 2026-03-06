// spreed 

let numbers = [1,2,3]
let newNumber = [...numbers ,4,5,6,7,8,9,10]
console.log(newNumber)


// rest 

function sum (...number){
    return number.reduce((total,num) => total + num,0)
}
console.log(sum(22,22,50,6))