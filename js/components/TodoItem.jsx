'use strict';
var React = require('react');
var cx = require('../utils/cx');

var TodoAction = require('../actions/TodoAction');

var TodoItem = React.createClass({
  _remove: function(index) {
    TodoAction.remove(index);
  },
  _toggleCompleted: function(index) {
    TodoAction.toggleCompleted(index);
  },
  render: function() {
    return (
      <li className={cx({completed: this.props.item.completed})}>
        <input type="checkbox" className="toggle" checked={this.props.item.completed} onChange={this._toggleCompleted.bind(this, this.props.index)}/>
        <label>{this.props.item.text}</label>
        <button className="destroy" onClick={this._remove.bind(this, this.props.index)}></button>
      </li>
    )
  }
});

module.exports = TodoItem;