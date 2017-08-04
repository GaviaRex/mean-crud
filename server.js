var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('myProperty', ['myThings']); //database and collection (tietokanta ja kokoelma)
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/mythings', function(req, res){
	console.log("I recieved a GET request");
	db.myThings.find(function( err, docs){
		console.log(docs);
		res.json(docs);
	});

});

app.post('/mythings', function(req, res){
	db.myThings.insert(req.body, function(err, doc){
		res.json(doc);
	});
});

app.delete('/mythings/:id', function (req, res){
  var id = req.params.id;
  db.myThings.remove({_id: mongojs.ObjectId(id)}, function (err, doc){
    res.json(doc);
  });
});

app.get('/mythings/:id', function (req, res){
  var id = req.params.id;
  db.myThings.findOne({_id: mongojs.ObjectId(id)}, function (err, doc){
    res.json(doc);
  });
});

app.put('/mythings/:id', function (req, res){
  var id = req.params.id;
  db.myThings.findAndModify({query: {_id: mongojs.ObjectId(id)},
    update: {$set: {type: req.body.type, title: req.body.title, author: req.body.author, synopsis: req.body.synopsis}},
    new: true}, function (err, doc){
      res.json(doc);
  });
});

app.listen(3000);
console.log("app running at port 3000");