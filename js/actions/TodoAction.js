'use strict';

var TodoDispatcher = require('../dispatchers/TodoDispatcher');
var TodoWebApi = require('../utils/TodoWebApi');

var TodoAction = {
  add: function(item) {
    console.log(item);
    TodoDispatcher.dispatch({
      eventName: 'add',
      newItem: item
    });
    TodoWebApi.addTodo(item);
  },
  receiveAll: function(type) {
    var todos = TodoWebApi.getAllTodos(type);
    TodoDispatcher.dispatch({
      eventName: 'receive',
      todos: todos
    });
  },
  remove: function(index) {
    TodoDispatcher.dispatch({
      eventName: 'remove',
      index: index
    });
    TodoWebApi.removeTodo(index);
  },
  toggleCompleted: function(index) {
    TodoDispatcher.dispatch({
      eventName: 'toggleCompleted',
      index: index
    });
    TodoWebApi.toggleCompleted(index);
  }
};

module.exports = TodoAction;