'use strict';
let React = require('react');
let TodoAction = require('../actions/TodoAction');
let guid = require('../utils/util').guid;

let TodoInput = React.createClass({
  handleChange: function(e) {
    let text;
    if (e.keyCode === 13) {
      text = React.findDOMNode(this.refs.item).value.trim();
      React.findDOMNode(this.refs.item).value = '';
      text && TodoAction.add({id: guid(), text: text, completed: false});
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

module.exports = TodoInput;