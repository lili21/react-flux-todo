'use strict';
var _ = require('lodash');
// var AppAction = require('../actions/AppAction');
// 循环依赖， 
// var TodoAction = TodoAction || require('../actions/TodoAction');
// console.log(_);
var todos = [];

var TodoWebApi = {
  getAllTodos: function(type) {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = type ? todos.filter(function(t) {
      return type === 'active' ? !t.completed : t.completed; 
    }) : todos;
    return _.clone(todos, true);
  },
  addTodo: function(todo) {
    todos.push(todo);
    ls();
  },
  removeTodo: function(index) {
    todos.splice(index, 1);
    ls();
  },
  toggleCompleted: function(index) {
    todos[index].completed = !todos[index].completed;
    ls();
  }
};
function ls() {
  localStorage.setItem('todos', JSON.stringify(todos));
}
module.exports = TodoWebApi;