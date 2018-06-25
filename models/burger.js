var orm = require("../config/orm.js")

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res)
        });
    },
    insertOne: function(val, cb){
        orm.insertOne("burgers", "burger_name", val, function(res){
            cb(res)
        });
        
    },
    updateOne: function(id, cb){
        orm.updateOne("burgers", true, "devoured", id, function(res){
            cb(res)
        });
    },
    deleteOne: function(id, cb){
        orm.deleteOne("burgers", id, function(res){
            cb(res)
        })
    }
}

module.exports = burger;