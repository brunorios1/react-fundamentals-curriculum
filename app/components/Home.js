var React = require('react');
var ReactDOM = require('react-dom');
var GetWeatherForm = require('./GetWeatherForm');

function Home (props) {
  return (
    <div>
      <div className="home">
        <div className="home-form">
          <h1 className="home-form__title">Enter a City and State</h1>
          <GetWeatherForm />
        </div>
      </div>
    </div>
  )
}

module.exports = Home;
