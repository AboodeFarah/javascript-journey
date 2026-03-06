// synchronous Blocking

function fetchUserDataSync() {
    alert("Fetching user data..."); // Blocks the code until the user clicks "OK"
    return { id: 1, name: "John Doe" };
}

console.log("Start fetching user data...");
const user = fetchUserDataSync(); // This blocks the rest of the code
console.log("User data:", user);
console.log("This message is blocked until user data is fetched.");

