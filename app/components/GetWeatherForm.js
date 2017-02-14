var React = require('react');
var PropTypes = React.PropTypes;

function GetWeatherForm (props) {
  return (
    <div className="get-weather-form">
      <form onSubmit={props.onSubmitLocation} className="get-weather-form__form form-inline">
        <input className="form-control" type="text" placeholder="St. George, Utah" onChange={props.onUpdateLocation} value={props.location} />
        <button type="submit" className="btn btn-success">Get Weather</button>
      </form>
    </div>
  )
}

GetWeatherForm.PropTypes = {
  onUpdateLocation: PropTypes.func.isRequired,
  onSubmitLocation: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired
}

module.exports = GetWeatherForm;
