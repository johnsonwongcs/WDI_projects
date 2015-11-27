var app = angular.module('App',[]);
app.controller('mainCtrl',MainCtrl);

function MainCtrl($http){
	this.http = $http;
	this.message = "";
}

MainCtrl.prototype.msg = function (){
	var self = this;
	this.http.post("http://localhost:8080/message").then(function(response){
		self.message = response.data;
	});
}

MainCtrl.prototype.msg1 = function (){
	var self = this;
	this.http.post("http://localhost:8080/setmessage/1").then(function(response){
		self.message = response.data;
	});
}