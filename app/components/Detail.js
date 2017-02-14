var React = require('react');
var ReactDOM = require('react-dom');
var Day = require('./Day');

function Detail (props) {
  return (
    <div className="text-center">
      <h1>{props.location.state.detail[0]}</h1>
      <Day dayData={props.location.state.detail[1]} />
      <div><strong>{props.location.state.detail[1].weather[0].description}</strong></div>
      <div>Min temp: {props.location.state.detail[1].temp.min} Farenheit</div>
      <div>Max temp: {props.location.state.detail[1].temp.max} Farenheit</div>
      <div>Humidity: {props.location.state.detail[1].humidity} Farenheit</div>
    </div>
  )
}

module.exports = Detail;
