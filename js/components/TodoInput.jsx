'use strict';
var React = require('react');
var TodoAction = require('../actions/TodoAction');

var TodoInput = React.createClass({
  handleChange: function(e) {
    var item;
    if (e.keyCode === 13) {
      item = React.findDOMNode(this.refs.item).value.trim();
      React.findDOMNode(this.refs.item).value = '';
      console.debug('addItem');
      // debugger
      TodoAction.add({id: guid(), text: item, completed: false});
    }
  },
  render: function() {
    return (
      <header className="todo__header">
        <h1>todos</h1>
        <input className="todo__new" ref="item" onKeyUp={this.handleChange} />
      </header>
    );
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

module.exports = TodoInput;