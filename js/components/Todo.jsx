var React = require('react');
var TodoStore = require('../stores/TodoStore');
var TodoAction = require('../actions/TodoAction');


var TodoInput = require('./TodoInput.jsx');
var TodoList = require('./TodoList.jsx');
var TodoRoute = require('./TodoRoute.jsx');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: TodoStore.getItems()};
  },
  componentDidMount: function() {
    var _this = this;
    TodoStore.on('change', function() {
      _this.setState({items: TodoStore.getItems()});
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
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

module.exports = TodoApp;