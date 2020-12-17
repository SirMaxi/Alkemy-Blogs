const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/posts.js');
require('dotenv').config();

const app = express();

const DEVELOPMENT = 'development';

if (process.env.NODE_ENV === DEVELOPMENT) {
  console.log('Development Mode');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  routes(app);
} else {
  routes(app);
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`El servidor arranco en el puerto ${PORT}`),
);
