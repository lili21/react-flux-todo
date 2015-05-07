'use strict';
var TodoDispatcher = require('../dispatchers/TodoDispatcher');

var AppAction = {
  receiveAll: function(todos) {
    TodoDispatcher.dispatch({
      eventName: 'receive',
      todos: todos
    });
  }
};

module.exports = AppAction;