var React = require('react');
var Day = require('./Day');
var PropTypes = React.PropTypes;

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

Forecast.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  forecastWeather: PropTypes.object.isRequired,
  onClickDetail: PropTypes.func.isRequired
}

module.exports = Forecast;
