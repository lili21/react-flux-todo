'use strict';
let React = require('react');
let TodoStore = require('../stores/TodoStore');
let TodoAction = require('../actions/TodoAction');


let TodoInputContainer = require('./TodoInputContainer');
let TodoListContainer = require('./TodoListContainer');


class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <TodoInputContainer />
        <TodoListContainer now={this.props.params.router || 'all'} />
      </div>
    );
  }
}

Todo.propTypes = {
  params: React.PropTypes.object
};

Todo.defaultProps = {
  params: {}
};

module.exports = Todo;