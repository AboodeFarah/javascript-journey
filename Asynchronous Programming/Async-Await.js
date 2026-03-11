// async await


function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve({ name: "abood", age: 20 });
            } else {
                reject("error");
            }   
        }, 3000);
    });
}

async function displayUserData() {

    try{
        const userData = await getUserData();
        console.log(userData);
    }
    catch(error){
        console.error(error);
    }
}
displayUserData();
