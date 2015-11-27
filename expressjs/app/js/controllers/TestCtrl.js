app.controller('TestCtrl',TestCtrl);

function TestCtrl ($http){
	this.http = $http;
	this.test = "test";
}

TestCtrl.prototype.get = function(){
	self = this;
	console.log('here');
	this.http.get('http://localhost:8080/test')
	.then(function(response) {
            console.log(response);
            self.test = response.data;
            console.log(self.test);
        });;
}