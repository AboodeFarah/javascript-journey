// Promise

function fetchUserData (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const secuss = true;
            if(secuss=== true){
                resolve({name : "abdalla",age : 30,id : 1})
            }else{
                reject("error fetching user data")
            }

        }, 3000);
    });

}
fetchUserData()
.then((userData)=> console.log("data fetched successfully",userData))
.catch((error)=>console.log("error fetching data",error));