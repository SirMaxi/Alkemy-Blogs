const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const routes = require('./src/routes/postRoutes');

dotenv.config();
const app = express();
require('./src/db/database');

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
