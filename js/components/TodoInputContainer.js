'use strict';
let React = require('react');
let TodoAction = require('../actions/TodoAction');
let guid = require('../utils/util').guid;

let TodoInput = require('./TodoInput');

class TodoInputContainer extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <TodoInput addTodo={this.addTodo} />
    );
  }
  addTodo(text) {
    TodoAction.add({id: guid(), text: text, completed: false});
  }
}

module.exports = TodoInputContainer;