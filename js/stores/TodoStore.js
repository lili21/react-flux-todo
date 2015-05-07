'use strict';
var TodoDispatcher = require('../dispatcher/TodoDispatcher');
var EventEmitter = require('events').EventEmitter;

/*
var TodoStore = {
  todoList: [],
  getList: function() {
    return this.todoList;
  },
  addItem: function(item) {
    this.todoList.push(item);
  }
};*/
var items = [];

var TodoStore = new EventEmitter();

// TodoStore.items = [];

TodoStore.getItems = function() {
  return items;
};

TodoStore.addItem = function(item) {
  items.push(item);
  this.emit('change');
};

TodoStore.remove = function(index) {
  items.splice(index, 1);
  this.emit('change');
};

TodoStore.toggleCompleted = function(index) {
  items[index].completed = !items[index].completed;
  this.emit('change');
};

TodoStore.update = function(index, text) {
  items[index].text = text;
  items[index].completed = false;
  this.emit('change');
};

TodoStore.init = function(todos) {
  items = todos;
  this.emit('change');
}

TodoDispatcher.register(function(action) {
  /*
  if (payload.eventName === 'add') {
    TodoStore.addItem(payload.newItem);
  }*/
  switch(action.eventName) {
    case 'add':
      TodoStore.addItem(action.newItem);
      break;
    case 'receive':
      TodoStore.init(action.todos);
      break;
    case 'remove':
      TodoStore.remove(action.index);
      break;
    case 'toggleCompleted':
      TodoStore.toggleCompleted(action.index);
      break;
    case 'update':
      TodoStore.update(action.index, action.text);
    default:
      break;
  }
});

module.exports = TodoStore;

