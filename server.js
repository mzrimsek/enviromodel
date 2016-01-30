var express = require('express');
var path = require('path');
var companies = require('./controllers/companies');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('json spaces', 2);

app.use(express.static(path.resolve("./dist")));

app.get('/', function(req, res){
  res.sendFile('index.html');
});
app.post('/api/companies', companies.create);
app.get('/api/companies', companies.list);
app.get('/api/companies/:name', companies.find);
app.delete('/api/companies/:name', companies.delete);

app.listen(8000);
exports = module.exports = app;
