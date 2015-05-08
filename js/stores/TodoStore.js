'use strict';
let TodoDispatcher = require('../dispatcher/TodoDispatcher');
let EventEmitter = require('events').EventEmitter;
let _ = require('lodash');

let items = [];

let TodoStore = {
  __proto__: EventEmitter.prototype,
  getItems: function() {
    return items;
  },
  addItem: function(item) {
    items.push(item);
    this.emit('change');
  },
  remove: function(index) {
    items.splice(index, 1);
    this.emit('change');
  },
  toggleCompleted: function(index) {
    items[index].completed = !items[index].completed;
    this.emit('change');
  },
  update: function(index, text) {
    items[index].text = text;
    items[index].completed = false;
    this.emit('change');
  },
  init: function(todos) {
    items = todos;
    this.emit('change');
  }
};


TodoDispatcher.register(action => {
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

// let ts = new TodoStore();

module.exports = TodoStore;

