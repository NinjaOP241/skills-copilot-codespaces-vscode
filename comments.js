// Create web server
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var comments = [
  {name: 'Morgan', message: 'Hello'},
  {name: 'Alex', message: 'Hi'}
];
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/comments', function(req, res) {
  res.json(comments);
});
app.post('/comments', function(req, res) {
  var comment = req.body;
  comments.push(comment);
  res.json(comment);
});
app.listen(3000, function() {
  console.log('Server started at http://localhost:3000');
});