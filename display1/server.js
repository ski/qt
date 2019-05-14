var express = require('express'),
  app = express(),
  port = process.env.PORT || 3003;
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route


app.listen(port);

console.log('display 1 server started on: ' + port);