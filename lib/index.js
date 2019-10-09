const express = require('express');
let app = express();

require('./config')(app)
require('./server')(app)
require('./routes')(app)

module.exports = app
