var React = require('react');
var ReactDOM = require('react-dom');
var ForecastItem = require('./ForecastItem');

function Forecast (props) {
    if (props.isLoading === true) {
      return (
        <div>Loading...</div>
      )
    } else {
      return (
        <div>
          <div className="text-center">
            <h1>{props.forecastWeather.city.name}</h1>
            <p>Select a day</p>
          </div>
          <div className="forecast-items">
            <ForecastItem dayData={props.forecastWeather.list[0]} />
            <ForecastItem dayData={props.forecastWeather.list[1]} />
            <ForecastItem dayData={props.forecastWeather.list[2]} />
            <ForecastItem dayData={props.forecastWeather.list[3]} />
            <ForecastItem dayData={props.forecastWeather.list[4]} />
          </div>
        </div>
      )
    }
}

module.exports = Forecast;
