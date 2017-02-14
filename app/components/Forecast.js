var React = require('react');
var ReactDOM = require('react-dom');
var utils = require('../utils/utils');

function ForecastItem (props) {
  var iconID = props.dayData.weather[0].icon;
  var imageUrl = "http://reactjsprogram.github.io/react-fundamentals-curriculum/app/images/weather-icons/" + iconID + ".svg";
  var date= utils.getDate(props.dayData.dt);

  return (
    <div className="forecast-item" onClick={props.onClickDetail}>
      <img src={imageUrl} className="img-responsive" />
      <div className="forecast-item__date">{date}</div>
    </div>
  )
}

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
            return <ForecastItem key={listItem.dt} dayData={listItem} onClickDetail={props.onClickDetail.bind(null, listItem)} />
          })}
        </div>
      </div>
    )
  }
}

module.exports = Forecast;
