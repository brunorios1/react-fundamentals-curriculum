var React = require('react');
var ReactDOM = require('react-dom');

function GetWeatherForm (props) {
  return (
    <div>
      <form>
        <input type="text" placeholder="St. George, Utah"/>
        <button type="button">Get Weather</button>
      </form>
    </div>
  )
}

module.exports = GetWeatherForm;
