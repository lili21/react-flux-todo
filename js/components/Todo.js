let React = require('react');
let TodoStore = require('../stores/TodoStore');
let TodoAction = require('../actions/TodoAction');


let TodoInput = require('./TodoInput');
let TodoList = require('./TodoList');
let TodoRoute = require('./TodoRoute');

let TodoApp = React.createClass({
  _changeHandle: function() {
    this.setState({items: TodoStore.getItems()});
  },
  getInitialState: function() {
    return {items: TodoStore.getItems()};
  },
  componentDidMount: function() {
    TodoStore.on('change', this._changeHandle);
  },
  componentWillUnmount: function() {
    TodoStore.removeListener('change', this._changeHandle);
  },
  render: function() {
    let router = this.props.params.router || 'all';
    return (
      <div>
        <TodoInput />
        <TodoList items={this.state.items} />
        <TodoRoute count={this.state.items.length} now={router} />
      </div>
    )
  }
});

module.exports = TodoApp;