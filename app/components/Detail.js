var React = require('react');
var ReactDOM = require('react-dom');

function Detail (props) {
  console.log(props.location.state.detail)
  return (
    <div>Detail</div>
  )
}

module.exports = Detail;
