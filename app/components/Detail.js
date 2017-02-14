var React = require('react');
var Day = require('./Day');
var utils = require('../utils/utils');

function Detail (props) {
  return (
    <div className="text-center">
      <h1>{props.location.state.detail[0]}</h1>
      <Day dayData={props.location.state.detail[1]} />
      <div><strong>{props.location.state.detail[1].weather[0].description}</strong></div>
      <div>Min temp: {utils.convertTemp(props.location.state.detail[1].temp.min)} degrees</div>
      <div>Max temp: {utils.convertTemp(props.location.state.detail[1].temp.max)} degrees</div>
      <div>Humidity: {props.location.state.detail[1].humidity}</div>
    </div>
  )
}

module.exports = Detail;
