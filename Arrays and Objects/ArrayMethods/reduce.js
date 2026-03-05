// reduce 

let numbers = [1,2,3,4]

let number = numbers.reduce((total,num)=>{
    return total + num ;
},0)
console.log(number)