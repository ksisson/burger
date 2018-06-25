var burger = require("../models/burger")

var express = require("express")

var router = express.Router();

router.get("/", function(req, res){

    burger.selectAll(function(data){
    console.log(data);
    res.render("index", {burger: data})
    })
});

router.put("/api/burgers/:id", function(req, res) {
    var id = req.params.id;
  
    burger.updateOne(req.body.burger_name, id, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });





module.exports = router;
