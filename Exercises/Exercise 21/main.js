// Use the reduce() method to multiply all the numbers in the array [1, 2, 3, 4, 5] together.

let numbers = [1,2,3,4,5];

let number = numbers.reduce((result, num) => {
    return result * num;
},1)
console.log(number)