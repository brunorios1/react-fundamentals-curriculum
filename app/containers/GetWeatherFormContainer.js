var React = require('react');
var ReactDOM = require('react-dom');
var GetWeatherForm = require('../components/GetWeatherForm');
var helpers = require('../utils/openweather');

var GetWeatherFormContainer = React.createClass({
  getInitialState: function () {
    return {
      location: ''
    }
  },
  handleUpdateLocation: function (e) {
    this.setState({
      location: e.target.value
    })
  },
  handleSubmitLocation: function (e) {
    console.log(helpers.getCityWeather(this.state.location));
  },
  render: function () {
    return (
      <GetWeatherForm
        onUpdateLocation={this.handleUpdateLocation}
        onSubmitLocation={this.handleSubmitLocation}
        location={this.state.location} />
    )
  }
})

module.exports = GetWeatherFormContainer;
