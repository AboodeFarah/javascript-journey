// Task: Simulate fetching JSON data from a file by creating a function that returns a Promise resolving to a JSON object after a delay. Use fetch to simulate this behavior, and parse the JSON data to a JavaScript object. Ensure that other code can run while waiting for the JSON data to be fetched.

async function fetchJsonData() {

    setTimeout(() => {
        console.log(`Simulating a delay in fetching JSON data...`);
    },5000);

    const jsonData = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await jsonData.json();
    console.log(data[50]);
}
fetchJsonData();
console.log(`This code runs while waiting for the JSON data to be fetched.`);
