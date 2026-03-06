// 1. Use the spread operator to combine two arrays `[1, 2, 3]` and `[4, 5, 6]` into a single array.
// 2. Create a function `multiply` that takes any number of arguments and returns their product using the rest parameter.

let arr1 = [1,2,3]
let arr2 = [...arr1,4,5,6]
console.log(arr2)


function multiply(...number){
    return number.reduce((total,num) => total * num ,1 )
}
console.log(multiply(10,20))