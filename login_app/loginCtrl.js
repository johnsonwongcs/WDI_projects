function LoginCtrl(api,$location) {
	this.api = api;
	this.location = $location;
}

LoginCtrl.prototype.login = function(username,password){
	var self = this;
	var login_state = this.api.login(username,password);
	login_state
	.then(function(){
		self.location.path('/profile');
	 });
					  
					  
}
LoginCtrl.prototype.createAccount = function(username,password){
	console.log(username+' '+password);
	this.api.createAccount(username,password);
}

angular.module('userApp').controller('LoginCtrl', LoginCtrl);