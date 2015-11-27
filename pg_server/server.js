var pg = require('pg');
var express = require('express');
var conString = "postgres://postgres:brainstation@localhost/shopapp";



// function insert_builder(table,object){
// 	var query = 'INSERT INTO '+table+ '(';
// 	object.map(function(val,key){
// 		query += '"'+key+'",';
// 	});
// 	query.splice(object.length-1,1);
// 	query += ') VALUES ('
// 	object.map(function(val,key){
// 		query += '"'+val+'",';
// 	});
// 	query.splice(object.length-1,1);
// 	query += ')';

// 	return query;
// }


pg.connect(conString, function(err, client, done) {
  if(err) {
    return console.error('error fetching client from pool', err);
  }
  else{
  	
  	var app = express();

	app.get('/',function(req,res){
		var object = {
			name:'axe2',
			category:'weapons',
			description:'New Weapon',
			price:'10',
			status:'active',
			image:'null',
			quantity:10
		};
		//sql_query = insert_builder('products',object);
		sql_query = "INSERT INTO products (name,category,description,price,status,image,quantity) VALUES ('"+object.name+"','"+object.category+"','"+object.description+"','"+object.price+"','"+object.status+"','"+object.image+"','"+object.quantity+"')";
		//res.send(sql_query);
		client.query(sql_query,function(err,result){
			done();

			if(err){
				res.send(err);
			}
			else{
				sql_query = "SELECT currval('product_id_seq')";
				client.query(sql_query,function(err,result){
					if(err){res.send(err)}
					else{
						object.productId = result.rows[0].currval;
						res.json(object)
					}
				});
				//res.send(result.rows[0].id);
			}
		});
	});

	app.listen(8080,function(){
		console.log('Server Listening at http://localhost:8080');
		console.log('Stop with CTRL + C');
	})
}
});


