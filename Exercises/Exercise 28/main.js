// Task: Rewrite the function from Exercise 2 to use async and await instead of .then() and .catch(). Ensure that the success message is logged only after the data is fetched.

function delayedSuccess() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Simulating success condition
            if (success) {
                resolve("Operation completed successfully!");
            } else {
                reject("An error occurred during the operation.");
            }
        }, 3000);
    });
}

async function displayUserData () {
    try{
        const data = await delayedSuccess();
        console.log(data);
    }catch(error){
        console.log(error)
    }
}
displayUserData()