var React = require('react');
var ReactDOM = require('react-dom');

function Forecast (props) {
    if (props.isLoading === true) {
      return (
        <div>Loading...</div>
      )
    } else {
      return (
        <div>
          Forecast component
        </div>
      )
    }
}

module.exports = Forecast;
