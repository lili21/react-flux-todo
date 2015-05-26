'use strict';
let _ = require('lodash');

// var AppAction = require('../actions/AppAction');
// 循环依赖,
// var TodoAction = TodoAction || require('../actions/TodoAction');
// console.log(_);
let todos = [];

let ls = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

let TodoWebApi = {
  getAllTodos: function(type) {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = type ? todos.filter(t => {
      return type === 'active' ? !t.completed : t.completed;
    }) : todos;
    return _.clone(todos, true);
  },

  addTodo: function(todo) {
    todos.push(_.clone(todo));
    ls();
  },

  removeTodo: function(index) {
    todos.splice(index, 1);
    ls();
  },

  toggleCompleted: function(index) {
    todos[index].completed = !todos[index].completed;
    ls();
  },

  update: function(index, text) {
    todos[index].text = text;
    todos[index].completed = false;
    ls();
  }
};

module.exports = TodoWebApi;
