'use strict';

require('../css/style.css');
let React = require('react');
let Todo = require('./components/Todo');

let TodoAction = require('./actions/TodoAction');

let render = (route) => {
  TodoAction.receiveAll(route);
  React.render(<Todo route={route} />, document.getElementById('todoapp'));
};



/* way to broke React. Event Delegate
var c = document.querySelector('#content');

c.addEventListener('click', function(e) {
  e.stopPropagation();
});*/

render(global.location.hash.substr(2));


global.addEventListener('hashchange', () => {
  render(global.location.hash.substr(2));
});
