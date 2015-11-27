var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var querystring = require('querystring');
// var request = require('request');

var app = express();

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

//Add new product
app.post('/shop/newproduct', function(req, resp){
	this.product = querystring.stringify(req.body);
	this.auth = req.headers.authorization;
	console.log('req.body = '+this.product);
	console.log('auth = '+this.auth);

	var options = {
		hostname: '174.129.248.23',
		port: '80',
		path: '/brainstation/shop/newproduct',
		method: 'POST',
		headers: {'Content-Type': 'application/x-www-form-urlencoded', authorization: this.auth}		
	}
	var body = '';
	var req = http.request(options, function(res){
		res.on('data', function (chunk){
			body += chunk;
			console.log('body = '+body);
		});
		res.on('end',function(){
			resp.send(JSON.parse(body));
		});
	});
	req.write(this.product);
	req.end();
});

//Retrieve products
app.get('/shop/retrieve_products/team2', function(req, resp){

	var options = {
		hostname: '174.129.248.23',
		port: '80',
		path: '/brainstation/shop/retrieve_products/team2',
		method: 'GET',
		headers: {'Content-Type': 'application/x-www-form-urlencoded'}		
	}
	var body = '';
	var req = http.request(options, function(res){
		res.on('data', function (chunk){
			body += chunk;
		});
		res.on('end',function(){
			resp.send(JSON.parse(body));
		})
	});
	req.write('');
	req.end();
});

//Login
app.post('/shop/login', function(req, resp){
	var self = this;
	this.login = req.body;
	console.log(this.login);

	var postData = querystring.stringify(this.login);
	var options = {
	    hostname: '174.129.248.23', //the website base url
	    port: '80', //either 80 or 443
	    path: '/brainstation/shop/login', //anything you want to add onto the base url above
	    method: 'POST',  //GET,POST,PUT, DELETE
	    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
	}
	var body = '';
	var req = http.request(options, function(res) {
	  res.on('data', function (chunk) {
	    body += chunk;
	    console.log(body);
	  });
	  res.on('end', function() {
	  	console.log(body);
	    resp.send(JSON.parse(body));
	  })
	});

	req.write(postData);
	req.end();

});

app.post('/test', function(req, res){
	res.json({message: 'Express POST works'});
});

app.use(express.static(__dirname + './../app/'));

app.listen (8080, function () {
	console.log('Server started on http://localhost:8080');
	console.log('Press CTRL + C to stop server');
});

// 'http://174.129.248.23/brainstation/shop'