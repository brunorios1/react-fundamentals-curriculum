var React = require('react');
var ReactDOM = require('react-dom');
var GetWeatherFormContainer = require('./GetWeatherFormContainer');

var MainContainer = React.createClass({
  render: function () {
    return (
      <div>
        <div className="header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="logo">My Weather App</div>
              </div>
              <div className="col-sm-12 col-md-6">
                <GetWeatherFormContainer />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    )
  }
})

module.exports = MainContainer;
