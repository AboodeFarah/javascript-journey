// HTTP Request

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
        console.log(data);
    }


    catch(error){

        console.error(error);

    }
}
fetchData();