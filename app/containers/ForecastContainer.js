var React = require('react');
var ReactDOM = require('react-dom');
var Forecast = require('../components/Forecast');
var helpers = require('../utils/openweather');

var ForecastContainer = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true
    }
  },
  componentDidMount: function () {
    helpers.getForecastWeather(this.props.params.city)
      .then(function(cityForecastWeather) {
        console.log(cityForecastWeather);
        this.setState({
          isLoading: false
        });
      }.bind(this))
  },
  render: function () {
    return (
      <Forecast isLoading={this.state.isLoading} />
    )
  }
})

module.exports = ForecastContainer;
