// Add a method start to the car object that logs "The car has started" to the console and call this method.

let car = {
    make : "toyota",
    model : "Corolla",
    year : 2022,
    start : () => {
        console.log("The car has started")
    },
}
console.log(car.start())