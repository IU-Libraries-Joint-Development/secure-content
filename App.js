var express = require('express');
var app = express();
var replaceStream = require('replacestream')
  , contentRequest = require('request');

app.get('/secure-content/:id', function (req, res) {
  var secureContent = contentRequest('http://purl.dlib.indiana.edu/' + id)
     .pipe(replaceStream('http://purl', 'https://purl')).pipe(res);
   // res.send(secureContent);
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
