// hook up our app object
var app = angular.module('todoApp', []);

function TodoCtrl(){
    // 1) setup an object to hold todos
	this.todos = [{text:'learn angular', done:false},
					{text:'drink water', done:false},
					{text:'cough up the water', done:true}]

	this.filters = [{label:'All', showTodo:function(todo){return true}},
					{label:'In Progress', showTodo:function(todo){return !todo.done}},
					{label:'Complete', showTodo:function(todo){return todo.done}}]

	this.selectedFilter = this.filters[0];

    // What info does a todo need?

    // 2) setup an object to hold our filters

    // 3) setup selected filter

}

// Hook up our controller to the app object
app.controller('TodoCtrl', TodoCtrl);


// 4) need a function to add todos

TodoCtrl.prototype.addTodo = function(){
	this.todos.push({text:this.newText, done:false});
	this.newText='';
}

TodoCtrl.prototype.isClearDisabled = function() {
	var completeTodos = this.todos.filter(function(todo){return todo.done})
	return completeTodos.length == 0;
}
// 5) need a function to clear complete todos

TodoCtrl.prototype.clearComplete = function(){
	this.todos = this.todos.filter(function(todo){return !todo.done})
}

// 6) need a function to check if complete is disabled (when there are no complete todos)