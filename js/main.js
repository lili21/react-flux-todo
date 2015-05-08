'use strict';

require('../css/style.css');
var React = require('react');
var Todo = require('./components/Todo');

var TodoAction = require('./actions/TodoAction');

var render = (route) => {
  TodoAction.receiveAll(route);
  React.render(<Todo route={route} />, document.getElementById('todoapp'));
};



/* way to broke React. Event Delegate
var c = document.querySelector('#content');

c.addEventListener('click', function(e) {
  e.stopPropagation();
});*/

render(global.location.hash.substr(2));


global.addEventListener('hashchange', function(e) {
  render(global.location.hash.substr(2));
});
