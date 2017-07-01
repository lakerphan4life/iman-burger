// import Mysql connection
var connection = require("../config/connection.js");

var orm = {
	selectAll: function(tableName, callback) {
		var queryString = "SELECT * FROM " +  tableName + ";";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			callback(result);
		});
	},
	// create SQL 
	insertOne: function(table, cols, vals, callback) {

	    var queryString = "INSERT INTO " + table +" ("+cols.toString()+") VALUES (?)";

	    console.log(queryString);

	    connection.query(queryString, vals, function(err, result) {
	      if (err) {
	        throw err;
	      }

	      callback(result);
	    });
	},
	// update SQL
	updateOne: function(table, condition, callback) {
		var queryString = "UPDATE " + table + " SET devoured = true WHERE "  + condition;

		console.log(queryString);
		
		connection.query(queryString, function(err,result){
			if(err) {
				throw err;
			}
			callback(result);
			});
	}	
};

module.exports = orm; 