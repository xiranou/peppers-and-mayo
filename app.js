var express = require('express');
var app     = express();
var path    = require("path");

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port'));
});