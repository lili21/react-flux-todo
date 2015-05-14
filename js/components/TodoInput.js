'use strict';
let React = require('react');

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className="todo__header">
        <h1>todos</h1>
        <input className="todo__new" ref="item" onKeyUp={this._handleChange.bind(this)} />
      </header>
    );
  }
  _handleChange(e) {
    if (e.keyCode === 13) {
      let text = React.findDOMNode(this.refs.item).value.trim();
      React.findDOMNode(this.refs.item).value = '';
      text && this.props.addTodo(text);
    }
  }
}

module.exports = TodoInput;