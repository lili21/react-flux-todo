let React = require('react');
let TodoAction = require('../actions/TodoAction');
let TodoStore = require('../stores/TodoStore');

let TodoList = require('./TodoList');
let TodoFooter = require('./TodoFooter');

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
      <div>
        <TodoList items={this.state.todos} />
        <TodoFooter count={this.state.todos.length} now={this.props.now} />
      </div>
    );
  }
  _updateState() {
    this.setState({todos: TodoStore.getItems()});
  }
}

module.exports = TodoListContainer;