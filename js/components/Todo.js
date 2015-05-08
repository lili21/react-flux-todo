let React = require('react');
let TodoStore = require('../stores/TodoStore');
let TodoAction = require('../actions/TodoAction');


let TodoInput = require('./TodoInput');
let TodoList = require('./TodoList');
let TodoRoute = require('./TodoRoute');

let TodoApp = React.createClass({
  getInitialState: function() {
    return {items: TodoStore.getItems()};
  },
  componentDidMount: function() {
    // let _this = this;
    TodoStore.on('change', () => {
      this.setState({items: TodoStore.getItems()});
    });
  },
  componentWillUnMoint: function() {
    TodoStore.removeListener('change');
  },
  render: function() {
    return (
      <div>
        <TodoInput />
        <TodoList items={this.state.items} />
        <TodoRoute count={this.state.items.length} now={this.props.route} />
      </div>
    )
  }
});

module.exports = TodoApp;