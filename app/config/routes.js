var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Home = require('../components/Home');
var Forecast = require('../components/Forecast');

var MainContainer = require('../containers/MainContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={Home} />
      <Route path='forecast/:city' component={Forecast} />
    </Route>
  </Router>
);

module.exports = routes;
