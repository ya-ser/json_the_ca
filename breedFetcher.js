//Endpoint: https://api.thecatapi.com/v1/breeds/search.

//URL/Documentation: https://docs.thecatapi.com/api-reference/breeds/breeds-search

const arg = process.argv.slice(2);
const request = require('request');

request(`https://api.thecatapi.scom/v1/breeds/search?q=${arg[0]}`, (error, response, body) => {
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body);
  if (error) {
    console.log("Error: ", error);
  }
  const data = JSON.parse(body);
  if (!data.length) {
    return console.log(`Sorry, but we dont have any record of ${arg[0]} in our system.`);
  } else {
    console.log(data[0].description);
  }
  console.log(typeof data);
});