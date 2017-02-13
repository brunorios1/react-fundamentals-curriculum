var React = require('react');
var ReactDOM = require('react-dom');
var GetWeatherForm = require('../components/GetWeatherForm');
var helpers = require('../utils/openweather');

var GetWeatherFormContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
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
    e.preventDefault();
    this.context.router.push('/forecast/' + this.state.location)
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
