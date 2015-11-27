var app = angular.module('todoApp', []);

function TodoCtrl() {
  this.todos = [
    {text: 'learn angular', done: true},
    {text: 'write the content for the next module', done: false},
    {text: 'buy cheese', done: true}
  ];
  
  this.filters = [
    {label: 'All', showTodo: function(todo) {return true;}},
    {label: 'Active', showTodo: function(todo) {return !todo.done;}},
    {label: 'Complete', showTodo: function(todo) {return todo.done;}}
  ]
}

TodoCtrl.prototype.addTodo = function (todo) {
	var todo = {
		text: todo,
		done: false
	};
	this.todos.push(todo);
}

TodoCtrl.prototype.isDone = function (todos){
	this.todos = this.todos.filter(function(todos))
}

app.controller('TodoCtrl', TodoCtrl);
