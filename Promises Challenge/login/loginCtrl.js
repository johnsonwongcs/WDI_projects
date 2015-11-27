function LoginCtrl(api, $http, $location, $q) {
this.apiService = api;
this.$http = $http;
this.$location = $location;
var defer = $q.defer();
}

LoginCtrl.prototype.createUser = function (){
	var self = this;
	console.log(self.username, self.password);
	this.$http({
	  method: 'POST',
	  dataType: 'jsonp',
	  url: 'https://mock-login-server.herokuapp.com/api/createAccount',
	  data: {"username":self.username,"password":self.password}	  
	})
		.then(function successCallback(response) {
		    console.log(response)
			}, function errorCallback(response) {
		    console.log(response)
			})
}

LoginCtrl.prototype.loginUser = function (){
	var self = this;
	console.log(this.$location);
	console.log(this.username +' '+this.password);
	this.apiService.login(this.username, this.password)
	.then(function (){
		console.log('here');
		console.log(self.$location);
		self.$location.path("/profile");
		},
		function () {
		self.$location.path("/login");
		alert("Login unsuccessful");
		});

	var data = this.$http({
  		method: 'GET',
  		url: 'https://mock-login-server.herokuapp.com/api/user'
	})
	.then(function successCallback(response) {
	console.log(response)
  	}, function errorCallback(response) {
	console.log(response)
  	});
  	console.log(data);
}

app.controller('LoginCtrl', LoginCtrl);