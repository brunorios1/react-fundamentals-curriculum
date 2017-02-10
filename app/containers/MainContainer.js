var React = require('react');
var ReactDOM = require('react-dom');
var HelloWorld = require('../components/HelloWorld');

var MainContainer = React.createClass({
  render: function () {
    return (
      <div>
        <HelloWorld />
      </div>
    )
  }
})

module.exports = MainContainer;
