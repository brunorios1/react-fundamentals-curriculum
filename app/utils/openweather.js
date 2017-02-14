var axios = require('axios');

var api = 'http://api.openweathermap.org/data/2.5/';
var key = "784541ebc4a95f389d274c1b4a85f7e1";

var helpers = {
  // until here, the function to get the city weather individually was never used.
  // getCityWeather: function (cityname) {
  //   return axios.get(api + 'weather?q=' + cityname + '&type=accurate&APPID=' + key)
  // },
  getForecastWeather: function (cityname) {
    return axios.get(api + 'forecast/daily?q=' + cityname + '&type=accurate&APPID=' + key + '&cnt=5')
  }
}

module.exports = helpers;
