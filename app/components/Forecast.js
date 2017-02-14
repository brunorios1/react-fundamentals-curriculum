var React = require('react');
var ReactDOM = require('react-dom');
var Day = require('./Day');

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
          {props.forecastWeather.list.map(function (listItem) {
            return <Day key={listItem.dt} dayData={listItem} onClickDetail={props.onClickDetail.bind(null, props.forecastWeather.city.name, listItem)} />
          })}
        </div>
      </div>
    )
  }
}

module.exports = Forecast;
