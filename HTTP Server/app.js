var http = require('http');
var dispatch = require('dispatch');

var server = http.createServer(dispatch({
	    '/message': {
	        POST: function (req, res) {
	        	res.setHeader("Access-Control-Allow-Origin", "http://localhost:8000");
				res.setHeader("Access-Control-Allow-Methods", "GET");
				res.setHeader("Access-Control-Allow-Headers", "*");
	            console.log('GET request received');
	            res.writeHead(200, {'Content-Type': 'text/plain'});
	            res.end('This request works!');

	        },
	     },
	    '/setmessage/:id': {
	     	POST: function (req, res, id) {
	     		res.setHeader("Access-Control-Allow-Origin", "http://localhost:8000");
				res.setHeader("Access-Control-Allow-Methods", "GET");
				res.setHeader("Access-Control-Allow-Headers", "*");
	     		console.log('GET request received');
	     		res.writeHead(200, {'Content-Type': 'text/plain'});
	     		res.end('This is message ' + id);
	     	}
	     },
	    '/test3': {
	     	GET: function (req, res) {
	     		console.log('GET request received');
	     		res.writeHead(200, {'Content-Type': 'text/plain'});
	     		res.end('This is test 3');
	     	}
	     },
	    '/(\\w+)': {
	     	GET: function (req, res) {
	     		console.log('GET request received');
	     		res.writeHead(200, {'Content-Type': 'text/plain'});
	     		res.end('404 page not found');
	     	}
	     }
  	})
);

var PORT = 8080;
server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
        console.log("Stop server by pressing CTRL + C");
});