function ProfileCtrl(api,$location,user) {
  	this.user = user;
  	this.api = api;
  	this.location = $location;
  	console.log = (this.user);
}	


ProfileCtrl.prototype.logout = function(){
	var self = this;
	this.api.logout()
	.then(function(){
		//success
		self.location.path('/');
	})
}
angular.module('userApp').controller('ProfileCtrl', ProfileCtrl);