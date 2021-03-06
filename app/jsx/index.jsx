var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var timer =  require('Timer');
var countdown = require('Countdown');

// Load Foundation
$(document).foundation();

//Added CSS
require('style!css!sass!AppStyle')

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
      <Route path="/countdown" component={countdown}></Route>
      <IndexRoute component={timer} />
		</Route>
	</Router>,
	document.getElementById('app')	
);