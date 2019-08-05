var express = require('express');
var router = express.Router();
var models = require('models');
/* GET home page. */
router.get('/', function(req, res, next) {
  // var arr = ["Node", "Js", "Eladi", "Qaqa", "cani", "Bomba", "kimi", "ishliyir"]
  // for(var i = 0; i < 100; i++) {
  //   var choice = arr[Math.floor(Math.random()*arr.length)];
  //   models.Todo.create({
  //     name: choice
  //   }).then(function(todo){
  //     console.log("YESSS");
  //   });
  // }
  models.Todo.findAll().then(function(todos) {
    res.render('index', { title: 'Express', todos:todos });
  });


});

module.exports = router;
