let React = require('react');
let TodoStore = require('../stores/TodoStore');
let TodoAction = require('../actions/TodoAction');


let TodoInput = require('./TodoInput');
let TodoList = require('./TodoList');
let TodoRoute = require('./TodoRoute');


class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <TodoInput addTodo={this.props.addTodo} />
        <TodoList items={this.props.todos} />
        <TodoRoute count={this.props.todos.length} now={this.props.now} />
      </div>
    );
  }
}

module.exports = Todo;