
async function fetchData() {
    
    console.log('start Fetching data...');

    const respone =  await fetch('data.json');

    const data = await respone.json();

    console.log("fetching data is done: ", data);
    console.log('Data fetching complete. This message runs after data is fetched.');
}
fetchData();