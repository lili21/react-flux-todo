'use strict';

require('../css/style.css');
var React = require('react');
var Todo = require('./components/Todo.jsx');
// var TodoWebApi = require('./utils/TodoWebApi');

// TodoWebApi.getAllTodos();
var TodoAction = require('./actions/TodoAction');

// TodoAction.receiveAll();

// React.render(<Todo />, document.getElementById('todoapp'));
/*
var c = document.querySelector('#content');

c.addEventListener('click', function(e) {
  e.stopPropagation();
  console.debug('content click');
});*/

// console.log(global);
render(global.location.hash.substr(2));

function render(route) {
  TodoAction.receiveAll(route);
  React.render(<Todo route={route} />, document.getElementById('todoapp'));
}
global.addEventListener('hashchange', function(e) {
  // console.log(global.location.hash);
  render(global.location.hash.substr(2));
});
