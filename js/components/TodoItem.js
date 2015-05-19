'use strict';
let React = require('react');
let cx = require('../utils/util').cx;

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editing: false};
  }
  render() {
    return (
      <li className={cx({completed: this.props.item.completed, editing: this.state.editing})}>
        <div className="todo__view">
          <input type="checkbox" className="toggle" checked={this.props.item.completed} onChange={this.props.toggleCompleted.bind(null, this.props.index)}/>
          <label onDoubleClick={this._editing.bind(this)}>{this.props.item.text}</label>
          <button className="destroy" onClick={this.props.removeTodo.bind(null, this.props.index)}></button>
        </div>
        <input className="todo__edit" defaultValue={this.props.item.text}  onKeyUp={this._change.bind(this, this.props.index)}/>
      </li>
    )
  }
  _editing() {
    this.setState({editing: true});
  }
  _change(index, e) {
    if (e.keyCode === 13) {
      let text = e.target.value;
      this.props.updateTodo(index, text);
      this.setState({editing: false});
    }
  }
}

TodoItem.propTypes = {
  item: React.PropTypes.object,
  index: React.PropTypes.number,
  toggleCompleted: React.PropTypes.func,
  removeTodo: React.PropTypes.func,
  updateTodo: React.PropTypes.func
};

TodoItem.defaultProps = {
  item: {},
  index: 0,
  toggleCompleted: () => {},
  removeTodo: () => {},
  updateTodo: () => {}
};

module.exports = TodoItem;