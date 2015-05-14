let React = require('react');
let TodoStore = require('../stores/TodoStore');
let TodoAction = require('../actions/TodoAction');


let TodoInputContainer = require('./TodoInputContainer');
let TodoListContainer = require('./TodoListContainer');


class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <TodoInputContainer />
        <TodoListContainer />
      </div>
    );
  }
}

module.exports = Todo;