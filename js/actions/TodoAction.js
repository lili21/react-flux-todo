'use strict';

let TodoDispatcher = require('../dispatcher/TodoDispatcher');
let TodoWebApi = require('../utils/TodoWebApi');

let TodoAction = {
  add: function(item) {
    TodoDispatcher.dispatch({
      eventName: 'add',
      newItem: item
    });
    TodoWebApi.addTodo(item);
  },

  receiveAll: function(type) {
    let todos = TodoWebApi.getAllTodos(type);
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
  },

  update: function(index, text) {
    TodoDispatcher.dispatch({
      eventName: 'update',
      index: index,
      text: text
    });
    TodoWebApi.update(index, text);
  }
};

module.exports = TodoAction;
