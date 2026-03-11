// Task: Create a function that returns a Promise, which resolves after a 2-second delay with a success message. Handle the Promise using .then() to log the success message, and add a .catch() block to handle any potential errors.

function delayedSuccess() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Simulating success condition
            if (success) {
                resolve("Operation completed successfully!");
            } else {
                reject("An error occurred during the operation.");
            }
        }, 2000);
    });
}
delayedSuccess()
.then((message) => console.log(message))
.catch((error) => console.error(error));