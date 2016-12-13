var connectionFactory = require('../infra/connectionFactory');
module.exports = function(app){

	app.get('/produtos', function(req,res){
		
		var connection = connectionFactory();
		connection.query('select * from livros', function(err, results){
			res.render('produtos/lista', {lista:results});
		});
		connection.end();
		
	});	
}


