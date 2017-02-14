var React = require('react');
var utils = require('../utils/utils');
var PropTypes = React.PropTypes;

function Day (props) {
  var iconID = props.dayData.weather[0].icon;
  var imageUrl = "./app/images/weather-icons/" + iconID + ".svg";
  var date = utils.getDate(props.dayData.dt);

  return (
    <div className="forecast-item" onClick={props.onClickDetail}>
      <img src={imageUrl} className="img-responsive" />
      <div className="forecast-item__date">{date}</div>
    </div>
  )
}

Day.PropTypes = {
  dayData: PropTypes.shape({
    dt: PropTypes.number.isRequired,
    weather: PropTypes.array.isRequired
  }).isRequired,
  onClickDetail: PropTypes.func
}

module.exports = Day;
