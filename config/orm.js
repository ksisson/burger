var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function(table, colname, val, cb) {
      var queryString = "INSERT INTO " + table + " (" + colname + ") " + "VALUES (" + '"' + val + '"' + ")";
  
  
      console.log(queryString);
  
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    
    updateOne: function(table, val, col, id, cb) {
      var queryString = "UPDATE " + table + " SET " + col + " = " + val + " WHERE id=" + id;
  
    
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },

    deleteOne: function(table, id, cb){
      var queryString = "DELETE FROM " + table + " WHERE id = " + id;

      connection.query(queryString, function(err, result){
        if(err) {
          throw err
        }
        cb(result)
      })
    }
  };
  
  // Export the orm object for the model (cat.js).
  module.exports = orm;