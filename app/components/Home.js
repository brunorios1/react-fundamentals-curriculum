var React = require('react');
var ReactDOM = require('react-dom');
var HelloWorld = require('./HelloWorld');

function Home (props) {
  return (
    <div>
      <HelloWorld />
    </div>
  )
}

module.exports = Home;
