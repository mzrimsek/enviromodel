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

app.use('/dist', express.static(path.resolve("./dist")));
app.use('/public', express.static(path.resolve("./public")));


app.post('/api/companies', companies.create);
app.get('/api/companies', companies.list);
app.get('/api/companies/:name', companies.findByName);
app.get('/api/companies/category/:category', companies.findByCategory);
app.delete('/api/companies/:name', companies.delete);
app.get('*', function(req, res){
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(3030);
exports = module.exports = app;
