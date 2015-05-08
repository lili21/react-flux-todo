'use strict';
let React = require('react');
let TodoItem = require('./TodoItem');
let TodoList = React.createClass({
  render: function() {
    let items = this.props.items;
    let itemNode = items.map((item, index) => {
      return (
        <TodoItem key={index} item={item} index={index}/>
      )
    });
    return (
      <section id="main">
        <ul className="todo__list">{itemNode}</ul>
      </section>
    )
  }
});

module.exports = TodoList;