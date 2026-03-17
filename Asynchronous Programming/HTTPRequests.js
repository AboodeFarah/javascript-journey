// HTTP Request


// GET METHOD

async function fetchData(){


    try{

        console.log(`Fetching data from the API...`);

        //GET METHOD
        const respone = await fetch('https://jsonplaceholder.typicode.com/posts');

        // Check if the response is successful
        if(!respone.ok){

            throw new Error(`HTTP error! status: ${respone.status}`);

        }

        // Convert the response to JSON
        const data = await respone.json();
        console.log("Data fetched from the API:", data);
    }


    catch(error){

        console.error(error);

    }
}
fetchData();


// POST METHOD

async function postData(){
    
    try{

        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'contentType': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                title: 'it is me abdalla',
                body: 'I am learning JavaScript',
                userId: 1
            }),
            

        })
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        console.log("before jsone response", response);

        const data = await response.json();

        console.log("after jsone response", data);
    }
    catch(error){
        console.log("Error posting data:", error);
    };
};
postData();