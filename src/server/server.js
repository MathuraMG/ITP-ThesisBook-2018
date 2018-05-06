const express = require('express'); // include the express library
const path = require('path');

const app = express();
const srcpath = path.join(__dirname, '../client');
// start the server:
app.listen(8080);
app.use('/', express.static('src/client/')); // set a static file directory
