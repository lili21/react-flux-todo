'use strict';
var React = require('react');
var TodoItem = require('./TodoItem.jsx');
var TodoList = React.createClass({
  render: function() {
    var _this = this;
    var items = this.props.items;
    var itemNode = items.map(function(item, index) {
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