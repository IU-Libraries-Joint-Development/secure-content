const express = require('express');
let app = express();
var replaceStream = require('replacestream')
  , contentRequest = require('request');

app.get('/secure-content/:id(*)', function (req, res) {
  // console.log('Sending http://purl.dlib.indiana.edu/' + req.params.id)
  var secureContent = contentRequest('http://purl.dlib.indiana.edu/' + req.params.id)
     .pipe(replaceStream('http://', 'https://')).pipe(res);
})

require('./config')(app)

require('./server')(app)

module.exports = app
