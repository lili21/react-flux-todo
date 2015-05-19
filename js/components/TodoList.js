'use strict';
let React = require('react');
let TodoItemContainer = require('./TodoItemContainer');

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="main">
        <ul className="todo__list">{this.mapItems.call(this)}</ul>
      </section>
    );
  }
  mapItems() {
    return this.props.items.map((item, index) => {
      return (
        <TodoItemContainer key={index} item={item} index={index} />
      );
    });
  }
}

TodoList.propTypes = {
  items: React.PropTypes.array
};

TodoList.defaultProps = {
  items: []
};
module.exports = TodoList;