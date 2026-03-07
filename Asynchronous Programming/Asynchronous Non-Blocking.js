// Asynchronous Non-Blocking

function getUserData (callback){
    setTimeout(() => {
        const user = {
            name : "abdalla",
            id : 1
        }
        callback(user);
    },5000);
}
console.log("starting fetching user data")

getUserData(function(user){
    console.log(user)
})

console.log("this userdata shows immediately")