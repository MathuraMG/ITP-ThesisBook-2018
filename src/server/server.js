const express = require('express'); // include the express library
const routes = require('./controller.js');
const path = require('path');

const app = express();
const srcpath = path.join(__dirname, '../client');
// start the server:
app.listen(8080);
app.use('/', express.static('src/client/')); // set a static file directory
//
app.use('/api', routes);

app.get('*', (req, res) => {
  res.sendFile(`${srcpath}/index.html`);
});
