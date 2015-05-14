'use strict';
let React = require('react');
let cx = require('../utils/util').cx;

let TodoAction = require('../actions/TodoAction');

let TodoItem = React.createClass({
  getInitialState: function() {
    return {editing: false};
  },
  _remove: function(index) {
    TodoAction.remove(index);
  },
  _toggleCompleted: function(index) {
    TodoAction.toggleCompleted(index);
  },
  _editing: function() {
    this.setState({editing: true});
  },
  _change: function(index, e) {
    let text;
    if (e.keyCode === 13) {
      text = e.target.value;
      // console.log(text);
      TodoAction.update(index, text);
      this.setState({editing: false});
    }
  },
  render: function() {
    return (
      <li className={cx({completed: this.props.item.completed, editing: this.state.editing})}>
        <div className="todo__view">
          <input type="checkbox" className="toggle" checked={this.props.item.completed} onChange={this._toggleCompleted.bind(this, this.props.index)}/>
          <label onDoubleClick={this._editing}>{this.props.item.text}</label>
          <button className="destroy" onClick={this.props.remove.bind(this, this.props.index)}></button>
        </div>
        <input className="todo__edit" defaultValue={this.props.item.text}  onKeyUp={this._change.bind(this, this.props.index)}/>
      </li>
    )
  }
});

module.exports = TodoItem;