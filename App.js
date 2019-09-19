var express = require('express');
var app = express();
var replaceStream = require('replacestream')
  , contentRequest = require('request');

app.get('/secure-content/:id(*)', function (req, res) {
  // console.log('Sending http://purl.dlib.indiana.edu/' + req.params.id)
  var secureContent = contentRequest('http://purl.dlib.indiana.edu/' + req.params.id)
     .pipe(replaceStream('http://purl', 'https://purl')).pipe(res);
})

var server = app.listen(8250, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("SecureContent listening at http://%s:%s/secure-content", host, port)
})
