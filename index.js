const axios = require('axios');
require('dotenv').config()

const apiKey = process.env.API_KEY;

const cities = ['Sydney', 'Peth', 'Melbourne', 'Adelaide'];

for (city of cities) {

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  axios.get(url)
    .then(function (response) {
      console.log(`Today in ${response.data.name} the weather is: ${response.data.weather[0].description}`);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

}
