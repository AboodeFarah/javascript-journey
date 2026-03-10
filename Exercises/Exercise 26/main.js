// Task: Implement a simple blocking function that simulates a delay of 2 seconds before returning a message. Then, implement a non-blocking version of the same function using setTimeout.

// blocking
function fetchUserDataSync() {
    alert("Fetching user data..."); 
    return { id: 1, name: "John Doe" };
}
console.log("Start fetching user data...");
const user = fetchUserDataSync(); 
console.log("User data:", user);
console.log("This message is blocked until user data is fetched.");


// non-blocking
function getUserData (callback){
    setTimeout(() => {
        const user = {
            name : "abdalla",
            id : 1
        }
        callback(user);
    },2000);
}
console.log("starting fetching user data")

getUserData(function(user){
    console.log(user)
})

console.log("this userdata shows immediately")