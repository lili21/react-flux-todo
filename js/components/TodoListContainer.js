let React = require('react');
let TodoAction = require('../actions/TodoAction');
let TodoStore = require('../stores/TodoStore');

let TodoList = require('./TodoList');

class TodoListContainer extends React.Component {
  constructor() {
    super();
    this.state = {todos: []};
  }
  componentWillMount() {
    this._updateState();
  }
  componentDidMount() {
    TodoStore.on('change', this._updateState.bind(this));
  }
  componentWillUnmont() {
    // TodoStore.removeListener('change', this._updateState)
    // ??
  }
  render() {
    return (
      <TodoList items={this.state.todos} />
    );
  }
  _updateState() {
    this.setState({todos: TodoStore.getItems()});
  }
}

module.exports = TodoListContainer;