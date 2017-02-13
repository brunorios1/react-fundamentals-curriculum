var React = require('react');
var ReactDOM = require('react-dom');
var utils = require('../utils/utils');

function ForecastItem (props) {
  var iconID = props.dayData.weather[0].icon;
  var imageUrl = "http://reactjsprogram.github.io/react-fundamentals-curriculum/app/images/weather-icons/" + iconID + ".svg";
  var date= utils.getDate(props.dayData.dt);

  return (
    <div className = "forecast-item">
      <img src={imageUrl} className="img-responsive" />
      <div className="forecast-item__date">{date}</div>
    </div>
  )
}

module.exports = ForecastItem;
