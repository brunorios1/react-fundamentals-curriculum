var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Home = require('../components/Home');

var MainContainer = require('../containers/MainContainer');
var ForecastContainer = require('../containers/ForecastContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={Home} />
      <Route path='forecast/:city' component={ForecastContainer} />
    </Route>
  </Router>
);

module.exports = routes;
