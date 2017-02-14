var React = require('react');
var ReactDOM = require('react-dom');
var Forecast = require('../components/Forecast');
var helpers = require('../utils/openweather');

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      forecastWeather: []
    }
  },
  handleClickDetail: function (detail) {
    this.context.router.push({
      pathname: '/detail/' + this.props.params.city,
      state: {
        detail: detail
      }
    })
  },
  componentDidMount: function () {
    helpers.getForecastWeather(this.props.params.city)
      .then(function(forecastWeatherObject) {
        this.setState({
          isLoading: false,
          forecastWeather: forecastWeatherObject.data
        });
      }.bind(this))
  },
  render: function () {
    return (
      <Forecast
        isLoading={this.state.isLoading}
        forecastWeather={this.state.forecastWeather}
        onClickDetail={this.handleClickDetail} />
    )
  }
})

module.exports = ForecastContainer;
