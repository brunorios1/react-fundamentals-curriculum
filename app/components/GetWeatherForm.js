var React = require('react');
var ReactDOM = require('react-dom');

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

module.exports = GetWeatherForm;
