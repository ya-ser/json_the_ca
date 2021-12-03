//Endpoint: https://api.thecatapi.com/v1/breeds/search.

//URL/Documentation: https://docs.thecatapi.com/api-reference/breeds/breeds-search

const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`http://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error);
    }
    const data = JSON.parse(body);
    if (!data.length) {
      return callback(null, `Sorry, but we dont have any record of ${breedName} in our system.`);
    }
    return callback(null, data[0].description);
  });
};

module.exports = {fetchBreedDescription};