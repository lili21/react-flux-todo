let React = require('react');
let TodoAction = require('../actions/TodoAction');

let TodoItem = require('./TodoItem');

class TodoItemContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TodoItem index={this.props.index} item={this.props.item} toggleCompleted={this.toggleCompleted} removeTodo={this.removeTodo} updateTodo={this.updateTodo} />
    );
  }
  toggleCompleted(index) {
    TodoAction.toggleCompleted(index);
  }
  removeTodo(index) {
    TodoAction.remove(index);
  }
  updateTodo(index, text) {
    TodoAction.update(index, text);
  }
}

module.exports = TodoItemContainer;